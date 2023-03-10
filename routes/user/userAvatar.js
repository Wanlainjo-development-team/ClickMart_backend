const router = require("express").Router()
const fs = require("fs")

const User = require('../../../models/user')

const cloudinary = require("../../middleware/cloudinary")
const upload = require("../../middleware/multer")

router.post("/avatar", upload.single("avatar"), async (req, res) => {
    const { email } = req.body

    let user = await User.findOne({ email })

    if (user.avatar) {
        console.log("Avatar already exists")
        await cloudinary.uploader.destroy(user.avatar_public_id)

        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

        user = await User.updateOne({ email }, { $set: { avatar: result.secure_url } })

        res.status(200).json({
            message: "Avatar updated",
            success: true,
            user,
            result,
        })
    } else {
        console.log("Avatar does not exist")
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

        user = await User.updateOne({ email }, {
            $set: {
                avatar: result.secure_url,
                avatar_public_id: result.public_id,
            }
        })

        res.status(200).json({
            message: "Avatar updated",
            success: true,
            user,
            result,
        })
    }
})

module.exports = router
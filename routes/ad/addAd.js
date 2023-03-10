const router = require("express").Router()
const mongoose = require('mongoose');

const User = require('../../models/user')
const Ad = require('../../models/ad')

const cloudinary = require("../../middleware/cloudinary")
const upload = require("../../middleware/multer")

router.post("/avatar", upload.single("avatar"), async (req, res) => {
    const { name, description, price, quantity, user } = req.body

    console.log("Avatar does not exist")
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER,
    })

    const ad = new Ad({
        _id: new mongoose.Types.ObjectId(),
        name,
        description,
        price,
        quantity,
        user
    })

    const adResult = await ad.save()

    res.status(201).json({
        message: 'Product successfully listed',
        data: adResult
    })
})

module.exports = router
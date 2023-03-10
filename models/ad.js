const mongoose = require('mongoose')

const adSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model("Ad", adSchema)
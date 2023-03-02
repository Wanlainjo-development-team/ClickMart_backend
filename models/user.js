const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //   primary info
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // secondary info
    avatar: { type: String },
    rating: { type: Number },
    phone: { type: String },
    gender: { type: String },
    country: { type: String },
    state: { type: String },
    lga: { type: String },
    verified: Boolean
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
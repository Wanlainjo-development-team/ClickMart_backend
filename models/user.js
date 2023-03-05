const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    //   primary info
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },

    // secondary info
    avatar: { type: String },
    avatar_public_id: { type: String },
    rating: { type: Number },
    phone: { type: String },

    // personal info
    gender: { type: String },
    dob: { type: Date },

    // location
    country: { type: String },
    state: { type: String },
    lga: { type: String },

    //  business info
    businessName: { type: String },
    slug: { type: String },
    businessAddress: { type: String },
    offerDelivery: { type: String },
    deliveryFee: { type: Number },
    showPhone: { type: Boolean },
    showEmail: { type: Boolean },
    showAddress: { type: Boolean },
    showRating: { type: Boolean },
    workingHours: { type: Array },
    openingHours: { type: String },
    closingHours: { type: String },

    // preferences
    preferredLanguage: { type: String },
    preferredCurrency: { type: String },
    preferredTheme: { type: String },
    allowNotifications: { type: Boolean },
    allowChat: { type: Boolean },
    allowFeedback: { type: Boolean },

    // social media
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
    pinterest: { type: String },
    whatsapp: { type: String },
    telegram: { type: String },
    snapchat: { type: String },
    tiktok: { type: String },
    viber: { type: String },
    google: { type: String },
    yahoo: { type: String },
    skype: { type: String },
    website: { type: String },

    //   account info
    accountStatus: { type: String },
    accountType: { type: String },
    isAccountDeleted: { type: Boolean },
    isAccountSuspended: { type: Boolean },
    isAccountVerified: { type: Boolean },
    isEmailVerified: { type: Boolean },
    isPhoneVerified: { type: Boolean },
    isIdVerified: { type: Boolean },
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
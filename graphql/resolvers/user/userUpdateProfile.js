const User = require('../../../models/user');

module.exports = {
    users: () => users,

    updateUser: async (args) => {
        // update user profile
        try {
            let user = await User.updateOne({ email: args.userInput.email }, {
                $set: {
                    name: args.userInput.name,
                    phone: args.userInput.phone,
                    gender: args.userInput.gender,
                    dob: args.userInput.dob,
                    country: args.userInput.country,
                    state: args.userInput.state,
                    lga: args.userInput.lga,
                    businessName: args.userInput.businessName,
                    slug: args.userInput.slug,
                    businessAddress: args.userInput.businessAddress,
                    offerDelivery: args.userInput.offerDelivery,
                    deliveryFee: args.userInput.deliveryFee,
                    showPhone: args.userInput.showPhone,
                    showEmail: args.userInput.showEmail,
                    showAddress: args.userInput.showAddress,
                    showRating: args.userInput.showRating,
                    workingHours: args.userInput.workingHours,
                    openingHours: args.userInput.openingHours,
                    closingHours: args.userInput.closingHours,
                    preferredLanguage: args.userInput.preferredLanguage,
                    preferredCurrency: args.userInput.preferredCurrency,
                    preferredTheme: args.userInput.preferredTheme,
                    allowNotifications: args.userInput.allowNotifications,
                    allowChat: args.userInput.allowChat,
                    allowFeedback: args.userInput.allowFeedback,

                    facebook: args.userInput.facebook,
                    twitter: args.userInput.twitter,
                    instagram: args.userInput.instagram,
                    linkedin: args.userInput.linkedin,
                    youtube: args.userInput.youtube,
                    pinterest: args.userInput.pinterest,
                    whatsapp: args.userInput.whatsapp,
                    telegram: args.userInput.telegram,
                    snapchat: args.userInput.snapchat,
                    tiktok: args.userInput.tiktok,
                    viber: args.userInput.viber,
                    google: args.userInput.google,
                    yahoo: args.userInput.yahoo,
                    skype: args.userInput.skype,
                    website: args.userInput.website,

                    accountStatus: args.userInput.accountStatus,
                    accountType: args.userInput.accountType,
                    isAccountDeleted: args.userInput.isAccountDeleted,
                    isAccountSuspended: args.userInput.isAccountSuspended,
                    isAccountVerified: args.userInput.isAccountVerified,
                    isEmailVerified: args.userInput.isEmailVerified,
                    isPhoneVerified: args.userInput.isPhoneVerified,
                    isIdVerified: args.userInput.isIdVerified,
                }
            })
            return {
                response: 'User profile updated successfully'
            };
        } catch (error) {
            throw error;
        }

    }
}
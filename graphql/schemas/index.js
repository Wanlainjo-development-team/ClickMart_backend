const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String
        email: String
        password: String
        token: String
        tokenExpiration: Int
        avatar: String
        rating: Float
        phone: String
        gender: String
        dob: String
        country: String
        state: String
        lga: String
        businessName: String
        slug: String
        businessAddress: String
        offerDelivery: String
        deliveryFee: Float
        showPhone: Boolean
        showEmail: Boolean
        showAddress: Boolean
        showRating: Boolean
        workingHours: String
        openingHours: String
        closingHours: String
        preferredLanguage: String
        preferredCurrency: String
        preferredTheme: String
        facebook: String
        twitter: String
        instagram: String
        linkedin: String
        youtube: String
        pinterest: String
        whatsapp: String
        telegram: String
        snapchat: String
        tiktok: String
        viber: String
        google: String
        yahoo: String
        skype: String
        website: String
        accountStatus: String
        accountType: String
        isAccountDeleted: Boolean
        isAccountSuspended: Boolean
        isAccountVerified: Boolean
        isEmailVerified: Boolean
        isPhoneVerified: Boolean
        isIdVerified: Boolean
    }

    input UserInput {
        name: String
        email: String
        password: String
    }

    type RootQuery {
        users: [User!]!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
        loginUser(userInput: UserInput): User
        updateUser(userInput: UserInput): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)
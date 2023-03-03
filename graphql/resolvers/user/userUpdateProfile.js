const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = require('../../../models/user');

module.exports = {
    users: () => users,

    updateUser: async (args) => {
        // update user profile
        try {
            let user = await User.updateOne({ email: args.userInput.email }, {
                $set: {
                    name: args.userInput.name
                }
            })
            return { name: args.userInput.name };
        } catch (error) {
            throw error;
        }

    }
}
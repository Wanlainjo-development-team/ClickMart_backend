const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

const User = require('../../../models/user');

module.exports = {
    users: () => users,

    createUser: async (args) => {
        try {
            const existingUser = await User.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: args.userInput.name,
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id };
        } catch (err) {
            throw err;
        }
    }
}
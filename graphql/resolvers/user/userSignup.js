const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const User = require('../../../models/user');

module.exports = {
    users: () => {
        return users
    },
    createUser: (args) => {
        return User.findOne({ email: args.userInput.email })
            .then(user => {
                if (user) {
                    throw new Error('User exists already.')
                }
                return bcrypt.hash(args.userInput.password, 12)
            })
            .then(hash => {
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name: args.userInput.name,
                    email: args.userInput.email,
                    password: hash
                })
                return user.save()
            })
            .then(result => {
                return { ...result._doc, password: null, _id: result.id }
            })
            .catch(err => {
                throw err
            })
    }
}
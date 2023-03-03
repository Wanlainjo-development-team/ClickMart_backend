const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = require('../../../models/user');

module.exports = {
    users: () => users,

    loginUser: async (args) => {
        const user = await User.findOne({ email: args.userInput.email });
        if (!user) {
            throw new Error('User does not exist!');
        }
        const isEqual = await bcrypt.compare(args.userInput.password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            'somesupersecretkey',
            {
                expiresIn: '1h'
            }
        );
        return {
            _id: user.id,
            name: user.name,
            email: user.email,
            token: token,
            tokenExpiration: 1
        };
    }
}
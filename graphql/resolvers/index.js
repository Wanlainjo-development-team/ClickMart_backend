// import resolvers
const userSignupResolvers = require('./user/userSignup');
const userSigninResolvers = require('./user/userSignin');
const userUpdateProfileResolvers = require('./user/userUpdateProfile');

module.exports = {
    ...userSignupResolvers,
    ...userSigninResolvers,
    ...userUpdateProfileResolvers
}
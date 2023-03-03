// import resolvers
const userSignupResolvers = require('./user/userSignup');
const userSigninResolvers = require('./user/userSignin');

module.exports = {
    ...userSignupResolvers,
    ...userSigninResolvers
}
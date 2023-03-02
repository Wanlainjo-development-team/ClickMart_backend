const { buildSchema } = require('graphql');

// import graphql schemas
const userSignup = require('./user/userSignup');

module.exports = buildSchema(`${userSignup}`)
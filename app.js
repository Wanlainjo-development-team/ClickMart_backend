require('dotenv').config();
const express = require('express');
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const connectDB = require("./config/db")

const { graphqlHTTP } = require('express-graphql');

const userScheme = require('./graphql/schemas');
const userResolver = require('./graphql/resolvers');

// use express
const app = express();

// connect to database
connectDB();

// use cors
app.use(cors())

// use morgan
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

// use body-parser
app.use(bodyParser.urlencoded({
    true: true,
    limit: '50mb',
    extended: true
}))

app.use(bodyParser.json({ limit: "50mb" }))

// use graphql
app.use('/graphql', graphqlHTTP({
    schema: userScheme,
    rootValue: userResolver,
    graphiql: process.env.NODE_ENV === 'development' ? true : false,
}));

// use port
const PORT = process.env.PORT || 8000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)
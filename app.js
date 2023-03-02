require('dotenv').config();
const express = require('express');
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const connectDB = require("./config/db")

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bcrypt = require("bcrypt");

const schema = require('./schemas/scheme');

// import user model
const User = require('./models/user');
const mongoose = require('mongoose');


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

const events = []

// use graphql
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        type User {
            _id: ID!
            name: String!
            email: String!
            password: String
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }

        input UserInput {
            name: String!
            email: String!
            password: String!
        }

        type RootQuery {
            events: [Event!]!
            users: [User!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    graphiql: process.env.NODE_ENV === 'development' ? true : false,
    rootValue: {
        events: () => {
            return events
        },
        users: () => {
            return users
        },
        createEvent: (args) => {
            const event = {
                _id: Math.random().toString(),
                title: args.eventInput.title,
                description: args.eventInput.description,
                price: +args.eventInput.price,
                date: args.eventInput.date
            }
            events.push(event)
            return event
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
}));

// use port
const PORT = process.env.PORT || 8000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)
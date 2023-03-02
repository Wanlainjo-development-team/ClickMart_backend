module.exports = `

type User {
    _id: ID!
    name: String!
    email: String!
    password: String
}

input UserInput {
    name: String!
    email: String!
    password: String!
}

type RootQuery {
    users: [User!]!
}

type RootMutation {
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`
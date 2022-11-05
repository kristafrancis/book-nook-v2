const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    friendCount: Int
}
type Book {
    bookId: String!
    title: String
    authors: [String]
    description: String
    image: String
}
input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
}

type Query {
    me: [User]
    user(username: String!): User
   
    
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    SaveBook(BookInput: BookInput!): User
    removeBook(bookId: String!): User
 }
`;
module.exports = typeDefs;
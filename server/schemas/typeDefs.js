const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
}

type Query {
    users: [User]
    user(username: String!): User
   
    
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    
 }
`;
module.exports = typeDefs;
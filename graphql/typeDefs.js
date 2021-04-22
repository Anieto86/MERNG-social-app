const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String
    createdAt: String!
    username: String
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  # input is a type of type that give an input to the resolver
  input RegisterInput {
    username: String
    password: String
    confirmPassword: String
    email: String
  }
  type Query {
    getPosts: [Post]
    #query (      ):  return
    getPost(postId: ID): Post
  }
  #Autentication
  #Mutation for do a change in the DB
  type Mutation {
    #input for users, so RegisterInput is the new type for handle more fields
    register(registerInput: RegisterInput): User! # this Ex return the type User
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
`;

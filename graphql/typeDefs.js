const { gql } = require("apollo-server");

module.exports = gql`
  # Comments
  type Post {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`;

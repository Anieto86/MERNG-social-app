//https://www.apollographql.com/docs/apollo-server/getting-started/

const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
//DB connection
const { MONGODB } = require("./config.js");

//models
const Post = require("./models/Post");

//type definitions (schema) it how the data would look
const typeDefs = require("./graphql/typeDefs");

//Resolver
const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected!");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });

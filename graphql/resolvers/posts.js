//post models
const Post = require("../../models/Post");
//Resolvers with try cantch and await
module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        console.log({ posts });
        return posts;
      } catch (error) {
        throw new Error(err);
      }
    },
  },
};

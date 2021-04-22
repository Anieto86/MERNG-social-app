const { AuthenticationError } = require("apollo-server");
//post models
const Post = require("../../models/Post");
//util
const checkAuth = require("../../util/check-auth");
//Resolvers with try cantch and await
module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        //console.log({ posts });
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        console.log({ post });
        if (post) {
          return post;
        } else {
          throw new Error("post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    // inside the context goes the req body.
    async createPost(_, { body }, context) {
      const user = checkAuth(context);

      const newPost = new Post({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return post;
    },

    async deletePost(_, { postId }, context) {
      const user = checkAuth(context);

      try {
        const post = await Post.findById(postId);
        if (user.username === post.username) {
          await post.deleted();
          return "Post deleted successfully";
        } else {
          throw new Authentication(" Action no allowed");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

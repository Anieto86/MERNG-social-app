const postResolvers = require("./posts");
//const userResolvers = requiere("./users");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
};

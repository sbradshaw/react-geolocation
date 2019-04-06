const { AuthenticationError } = require("apollo-server");

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError("Login required.");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    user: authenticated((root, args, ctx) => ctx.currentUser)
  }
};

const { User, Comment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select("-__v -password")
        .populate('friends')
        .populate('comments');
        console.log(userData);
        return userData;
      }
      throw new AuthenticationError("Not logged in!");
    },
    // GET all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate('friends')
        .populate('comments');
    },
    // GET a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate('friends')
        .populate('comments');
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      const comments = await Comment.find(params).sort({ createdAt: -1 });
      console.log(comments);
      return comments
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Your email or password dont match!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Please enter correct email or password");
      }

      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { id, email }) => {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { email },
        { new: true }
      );

      return user;
    },

    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    saveBook: async (parent, args, context) => {
      console.log("saveBook")
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: args.input } },
          { new: true, runValidators: true }
        );
        return updateUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBook: async (parent, { bookId }, context) => {
      console.log(context.user, bookId)
      if (context.user) {
        const updateSavedBooks = await User.findOneAndUpdate(
        
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        console.log(updateSavedBooks)
        return updateSavedBooks;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
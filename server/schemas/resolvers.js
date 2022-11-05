const { User, Post} = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
    user: async () => {
        return User.find()
          .select('-__v -password')
          
   
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password');

      },
      
      
   },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findone({ email });

      if(!user) {
        throw new AuthenticationError('Your email or password dont match!');
      }
      const correctPw = await user.isCorrectPassword(password);
    if (!correctPw) {
      throw new AuthenticationError('Please enter correct email or password');
    }

    const token = signToken(user);
    return { token, user };
    },

    saveBook: async(parent, { BookInput }, context) => {
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: BookInput }},
          { new: true, runValidators: true }
        );
        return updateUser;
      }
      throw new AuthenticationError("You need to be logged in!");

    }, 

    removeBook: async(parent, { bookId }, context) => {
      if (context.user) {
        const updateSavedBooks = await User.findOneAndUpdate(
          { _id: context.user.id }, 
          { $pull: { savedBooks: {bookId} } },
          {new: true}
        );
        return updateSavedBooks
      }
      throw new AuthenticationError('You need to be logged in!');
    }
    
  }
};
  
  module.exports = resolvers;
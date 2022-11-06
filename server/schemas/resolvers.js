const { User, Comments} = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
    me: async(parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

          return userData;
      }
      throw new AuthenticationError('Not logged in!');
    },
    
    users: async () => {
        return User.find()
          .select('-__v -password')
          
   
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password');

      },
      comments: async (parent, {username}) => {
        const params = username ? {username} : {};
        return Comments.find(params).sort({createdAt: -1});
      },
      comment: async (parent, {_id}) => {
        return Comments.findOne({_id});
      }
      
      
   },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comments.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );
    
        return comment;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
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
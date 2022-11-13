// //user model
// const { User } = require('../models');

// const { signToken } = require('../utils/auth');


// module.exports = {
//    //createuser with token 
//    async newUser({ body }, res) {
//     const user = await User.create(body);

//     if (!user) {
//         return res.status(400).json({ message: 'Something went wrong'});
//     }
//     const token = signToken(user);
//     res.json({ token, user});
//    },

//     //login 
// async login({ body }, res) {
//     const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
//     if (!user) {
//         return res.status(400).json({ message: 'Cannot find this user'});
//     }
//     const correctPw = await user.isCorrectPassword(body.password);

//     if(!correctPw) {
//         return res.status(400).json({ message: 'Wrong Password'});
//     }
//     const token =signToken(user);
//     res.json({ token, user });
// },

//     //single user 
// async getSingleUser({ user = null, params }, res) {
//     const userFound = await User.findOne({ 
//         $or: [{ _id: user ? user._id : params.id }, { username: params.username }],

//     });
//     if (!userFound) {
//         return res.status(400).json({ message: 'Cannot find this user!'});
//     }
//     res.json(userFound);
// },


//     //addFriend

//     //addComment 

// //saveBook (sam)
// async saveBook({ user, body }, res) {
//     console.log(user);
//     try {
//         const updateUser = await User.findOneAndUpdate(
//             { _id: user._id},
//             { $addToSet: { savedBooks: body } },
//             { new: true, runValidators: true }
//         );
//         return res.json(updatedUser);
//     } catch (err) {
//         console.log(err);
//         return res.status(400).json(err);
//     }
// },

// //deleteBook (sam)
// async deleteBook({ user, params }, res) {
//     const updateUser = await User.findByIdAndUpdate(
//         { _id: user._id }, 
//         { $pull: { savedBooks: { bookId: params.bookId } } },
//         { new: true }
//     );
//     if (!updateUser) {
//         return res.status(404).json({ message: "Couldn't find user with this id"});
//     }
//     return res.json(updateUser);
// },
// };
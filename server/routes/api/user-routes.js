// const router = require('express').Router();

// const {
//     newUser,
//     getSingleUser,
//     saveBook,
//     deleteBook,
//     login,
//     addFriend,
//     addComment
// } = require('../../controllers/user-controllers');



// //middleware
// const { authMiddleware } = require('../../utils/auth');


// //authMiddleware to send token for verification of user
// const { authMiddleware } = require('../../utils/auth');

// router.route('/').post(newUser).put(authMiddleware, saveBook);

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

// //route for addFriend
// // router.route('/friends').post(addFriend).put(authMiddleware, addFriend)

// //route for addcomment 
// //router.route().post
// router.route('/books/:bookId').delete(authMiddleware, deleteBook);

// module.exports = router;



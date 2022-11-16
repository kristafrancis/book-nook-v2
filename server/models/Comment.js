const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema({
    commentText: {
        type: String,
        minlength:1,
        maxlength: 300
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    book_id: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


const Comment = model('Comment', commentSchema);
module.exports = Comment;

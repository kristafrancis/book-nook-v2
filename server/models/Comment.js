const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    comment_text: {
        type: String,
        required: true,
        minlength:1,
        maxlength: 300
    },
    username: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    }

},
{
    toJSON: {
      getters: true
    }
}
);


const Comments = model('Comments', commentSchema);
module.exports = Comments;

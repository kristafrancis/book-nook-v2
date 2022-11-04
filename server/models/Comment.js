const { Schema, model} = require('mongoose');

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

},
{
    toJSON: {
      getters: true
    }
}
);


const Comments = model('Comments', commentSchema);
module.exports = Comments;

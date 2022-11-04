const { Schema, model, Types } = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not valid!` 
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5
      },

    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
    
},
{
    toJSON: {
    getters: true
    },
  
}
);
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;

//need to add savedBooks to schema (sam)
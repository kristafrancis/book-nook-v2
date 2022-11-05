const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

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
            message: props => `${props.value} Please enter a valid email address!` 
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
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

//hash user password for security
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  //validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };




UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;

//need to add savedBooks to schema (sam)
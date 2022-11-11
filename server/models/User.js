const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
//import book schema
const bookSchema = require('./Book');

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
        minlength: 8,
        select: false,
      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,
    },
    UserSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
          next();
        }
      
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      }),
      
      UserSchema.methods.matchPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
      });
      
      UserSchema.methods.getSignedJwtToken = function () {
        return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
      };
      
      UserSchema.methods.getResetPasswordToken = function () {
        const resetToken = crypto.randomBytes(20).toString("hex");
      
        // Hash token (private key) and save to database
        this.resetPasswordToken = crypto
          .createHash("sha256")
          .update(resetToken)
          .digest("hex");
      
        // Set token expire date
        this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
      
        return resetToken;
      };
      

    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }];
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }];
    savedBooks: [bookSchema];


    const User = mongoose.model("User", UserSchema);

    module.exports = User;

////hash user password for security
//userSchema.pre('save', async function(next) {
//    if (this.isNew || this.isModified('password')) {
//      const saltRounds = 10;
//      this.password = await bcrypt.hash(this.password, saltRounds);
//    }
//  
//    next();
//  });
//
// //validate password for logging in
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };
//
//
//
//
//userSchema.virtual('friendCount').get(function() {
//    return this.friends.length;
//})










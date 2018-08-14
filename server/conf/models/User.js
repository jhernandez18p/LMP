const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        username: {
            type:String,
        },
        first_name: {
            type: String,
            trim: true,
            required: true,
        },
        last_name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        provider: {
            type:String,
        },
        provider_id: {
            type:String,
        },
        token: {
            type:String,
        },
        provider_pic: {
            type:String,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Car'
            }
        ],
    }
);

// hash user password before saving into database
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

UserSchema.methods.addLike = function (car) {
    this.likes.push(car)
};

module.exports = mongoose.model('User', UserSchema)
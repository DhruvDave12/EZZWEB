const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodgroup: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    pastComp: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    }
   
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);
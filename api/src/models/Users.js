// Users.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    services: {
        weather: {
            city: []
        },
        facebook: {
            profile_pic_url: String,
            token: String,
        },
        twitter: {
            posts: Number
        }
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
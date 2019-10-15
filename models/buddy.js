const mongoose = require('mongoose');
const config = require('../config/database');

const BuddySchema = mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required:true
    }
});

const Buddy = module.exports = mongoose.model('Buddy', BuddySchema);

module.exports.getUserById = function(id, callback){
    Buddy.findById(id, callback);
}

module.exports.getBuddyByUsername = function(username, callback){
    const query = {username: username}
    Buddy.findOne(query, callback);
}

module.exports.addBuddy = function(newBuddy, callback){
    newBuddy.save(callback);
}
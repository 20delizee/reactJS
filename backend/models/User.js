const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    lastname: { type: String, required: true},
    firstname: { type: String, required: true},
    group:{ type: String, required: true},
    role: {type: String, required: true},
    
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
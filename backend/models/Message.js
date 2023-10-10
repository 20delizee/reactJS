var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    
    message: String,
    date: { type: Date, default: Date.now },
    time: String,
    receiver: String,
    email: String
});

module.exports = mongoose.model('Message', messageSchema);
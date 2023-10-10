var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupSchema = new mongoose.Schema({
    
    groupName: { type: String},
    updated_date: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Group', groupSchema);
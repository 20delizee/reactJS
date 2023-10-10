var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({
    
    names: { type: String},

});

module.exports = mongoose.model('Category', categorySchema);
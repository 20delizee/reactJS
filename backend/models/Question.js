var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
    
    questionName: String,
    questionContent: String,
    questionCategory: String,
    questionPoint: String,
    questionAnswer: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', questionSchema);
var mongoose = require('mongoose');

var suggestionSchema = new mongoose.Schema({
    
    questionName: String,
    questionAnswer: String,
    questionCategory: String,
    questionContent : String,
    questionPoint : Number,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
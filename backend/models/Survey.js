var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var surveySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    number: String,
    point: String,
    time: String,
    surveyName: String,
    surveyCategory: String,
    question: Object,
    reponse: Array,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Survey', surveySchema);
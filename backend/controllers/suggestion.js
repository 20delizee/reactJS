const Suggestion = require('../models/Suggestion');

exports.createSuggestion = (req, res, next) => {
  const suggestion = new Suggestion({
    questionName: req.body.questionName,
    questionAnswer: req.body.questionAnswer,
    questionCategory: req.body.questionCategory,
    questionContent: req.body.questionContent,
    questionPoint: req.body.questionPoint,
    updated_date: req.body.updated_date,
    
  });
  suggestion.save().then(
    () => {
      res.status(201).json({
        id : suggestion._id
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneSuggestion = (req, res, next) => {
  
  Suggestion.findOne({
    _id: req.params.id
  })
  .then(
    (suggestion) => {
      res.status(200).json(suggestion);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
  
  
};

exports.modifySuggestion = (req, res, next) => {
  const suggestion = new Suggestion({
    _id: req.params.id,
    questionName: req.body.questionName,
    questionAnswer: req.body.questionAnswer,
    questionCategory: req.body.questionCategory,
    questionContent: req.body.questionContent,
    questionPoint: req.body.questionPoint,

    updated_date: req.body.updated_date
  });
  Suggestion.updateOne({_id: req.params.id}, suggestion).then(
    () => {
      res.status(201).json({
        message: 'Suggestion updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteSuggestion = (req, res, next) => {
  Suggestion.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllSuggestion = (req, res, next) => {
  Suggestion.find()
  .then(suggestions => res.status(200).json(suggestions))
  .catch(error => res.status(400).json({ error }));
};
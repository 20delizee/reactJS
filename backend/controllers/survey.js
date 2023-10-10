const Survey = require('../models/Survey');

exports.createSurvey = (req, res, next) => {

  

  let questions = []
  let questionNumber = 0

  for (let i = 0; i < req.body.question.length; i++) {
    questionNumber++,
    questions.push(JSON.parse(req.body.question[i]))
  }


  const survey = new Survey({
    number: req.body.number,
    point: req.body.point,
    time: req.body.time,
    surveyName: req.body.surveyName,
    surveyCategory: req.body.surveyCategory,
    question: questions,
    reponse: Array(questionNumber),
    updated_date: req.body.updated_date,
  });

  
  survey.save().then(
    () => {
      res.status(201).json({
        id : survey._id
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

exports.getOneSurvey = (req, res, next) => {

  Survey.findOne({
    _id: req.params.id
  })
  .then(
    (survey) => {
      res.status(200).json(survey);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );

};

exports.modifySurvey = (req, res, next) => {
  let questions = []

  for (let i = 0; i < req.body.question.length; i++) {

    questions.push(JSON.parse(req.body.question[i]))
  }
  const survey = new Survey({
    _id: req.params.id,
    number: req.body.number,
    point: req.body.point,
    time: req.body.time,
    surveyName: req.body.surveyName,
    surveyCategory: req.body.surveyCategory,
    question: questions,
    updated_date: req.body.updated_date
  });
  Survey.updateOne({_id: req.params.id}, survey).then(
    () => {
      res.status(201).json({
        message: 'Survey updated successfully!'
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

exports.deleteSurvey = (req, res, next) => {
  Survey.deleteOne({_id: req.params.id}).then(
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

exports.getAllSurvey = (req, res, next) => {
    Survey.find()
      .then(surveys => res.status(200).json(surveys))
      .catch(error => res.status(400).json({ error }));
};
const express = require('express');
const router = express.Router();

const surveyCtrl = require('../controllers/survey');
const auth = require('../middleware/auth')

router.get('/',  surveyCtrl.getAllSurvey);
router.post('/create', auth, surveyCtrl.createSurvey);
router.get('/:id', auth, surveyCtrl.getOneSurvey);
router.put('/modify:id', auth, surveyCtrl.modifySurvey);
router.delete('/delete:id', auth, surveyCtrl.deleteSurvey);

module.exports = router;
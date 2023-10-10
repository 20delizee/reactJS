const express = require('express');
const router = express.Router();

const questionCtrl = require('../controllers/question');
const auth = require('../middleware/auth')

router.get('/',  questionCtrl.getAllQuestion);
router.post('/create', auth, questionCtrl.createQuestion);
router.get('/:id', auth, questionCtrl.getOneQuestion);
router.patch('/modify:id', auth, questionCtrl.modifyQuestion);
router.delete('/delete:id', auth, questionCtrl.deleteQuestion);

module.exports = router;
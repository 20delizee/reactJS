const express = require('express');
const router = express.Router();

const suggestionCtrl = require('../controllers/suggestion');
const auth = require('../middleware/auth')

router.get('/',  suggestionCtrl.getAllSuggestion);
router.post('/create', auth, suggestionCtrl.createSuggestion);
router.get('/:id', auth, suggestionCtrl.getOneSuggestion);
router.patch('/modify:id', auth, suggestionCtrl.modifySuggestion);
router.delete('/delete:id', auth, suggestionCtrl.deleteSuggestion);

module.exports = router;
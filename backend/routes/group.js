const express = require('express');
const router = express.Router();

const groupCtrl = require('../controllers/group');
const auth = require('../middleware/auth')

router.get('/',  groupCtrl.getAllGroup);
router.post('/create', auth, groupCtrl.createGroup);
router.get('/:id', auth, groupCtrl.getOneGroup);
router.put('/modify:id', auth, groupCtrl.modifyGroup);
router.delete('/delete:id', auth, groupCtrl.deleteGroup);

module.exports = router;
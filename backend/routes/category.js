const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
const auth = require('../middleware/auth')

router.get('/',  categoryCtrl.getAllCategory);
router.post('/create',  categoryCtrl.createCategory);
router.get('/:id', auth, categoryCtrl.getOneCategory);
router.put('/modify/:id', categoryCtrl.modifyCategory);
router.delete('/delete/:id', categoryCtrl.deleteCategory);

module.exports = router;
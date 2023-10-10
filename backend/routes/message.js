const express = require('express');
const router = express.Router();

const messageCtrl = require('../controllers/message');
const auth = require('../middleware/auth')

router.get('/',  messageCtrl.getAllMessage);
router.get('/test',  messageCtrl.getMessageTest);
router.post('/create', messageCtrl.createMessage);
router.get('/email/:email', messageCtrl.getMessagesByEmail); // Nouvelle route pour récupérer les messages par e-mail

router.get('/:id', auth, messageCtrl.getOneMessage);
router.patch('/modify:id',auth, messageCtrl.modifyMessage);
router.delete('/delete:id',auth,  messageCtrl.deleteMessage);

module.exports = router;
const express = require('express');
const router = express.Router();
const chat = require('../controllers/chat');

router.get('/:userId/:targetUserId', chat.getMessages);
router.post('/', chat.sendMessage);

module.exports = router;

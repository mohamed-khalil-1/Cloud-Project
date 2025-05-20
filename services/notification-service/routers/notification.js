const express = require('express');
const router = express.Router();
const notification = require('../controllers/notification');

router.get('/:id', notification.getNotifications);
router.put('/:notificationId', notification.markAsRead);
router.post('/', notification.createNotification);

module.exports = router;

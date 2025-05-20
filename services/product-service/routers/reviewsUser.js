const express = require('express');
const router = express.Router();
const lists = require('../controllers/lists');

// Get all reviews by a specific user (ownerId)
router.get('/:ownerId', lists.getReviewsByOwnerId);

module.exports = router;

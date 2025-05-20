const express = require('express');
const router = express.Router();
const lists = require('../controllers/lists');

router.get('/:productId', lists.getReviews);
router.post('/:productId', lists.addReview);

module.exports = router;

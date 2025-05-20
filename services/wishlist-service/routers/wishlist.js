const express = require('express');
const router = express.Router();
const wishlist = require('../controllers/wishlist');

router.post('/', wishlist.addToWishlist);
router.delete('/', wishlist.removeFromWishlist);
router.get('/:userId', wishlist.getWishlist);

module.exports = router;

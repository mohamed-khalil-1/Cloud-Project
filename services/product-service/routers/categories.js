const express = require('express');
const router = express.Router();
const lists = require('../controllers/lists');

router.get('/', lists.getCategories);

module.exports = router;

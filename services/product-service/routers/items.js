const express = require('express');
const router = express.Router();
const lists = require('../controllers/lists');

router.get('/', lists.getAllItems);
router.get('/:id', lists.getItemById);

module.exports = router;

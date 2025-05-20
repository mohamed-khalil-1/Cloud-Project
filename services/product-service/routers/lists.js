const express = require('express');
const router = express.Router();
const lists = require('../controllers/lists');

router.post('/', lists.createListWithItems);
router.get('/', lists.getLists);
router.get('/:listId', lists.getListById);
router.delete('/:listId', lists.deleteList);

module.exports = router;

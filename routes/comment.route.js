const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/:postId', commentController.addComment);

router.get('/:postId', commentController.getComments);


module.exports = router;


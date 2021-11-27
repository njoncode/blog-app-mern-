const express = require('express');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

const router = express.Router();

router
  .route('/')
  .post(postController.addPost)
  .get(postController.getAllPosts);

  router
  .route('/:postId')
  .get(postController.getPost)
  .put(postController.editPost)
  .delete(postController.deletePost);

  // router.post('/comments/:postId', commentController.addComment);

// router.get('/get-posts',postController.getAllPosts);
// router.get('/get-post/:id', postController.getPost);
// router.post('/add-post', postController.addPost);
// router.put('/edit-post/:id', postController.editPost);

module.exports = router;



/**
 * add post
 * get all posts
 * get specific post
 * edit post
 * delete post
 */
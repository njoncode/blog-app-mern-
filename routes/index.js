const express = require('express');

const postRoute = require('./post.route');
const authRoute = require('./auth.route');
const commentRoute = require('./comment.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/posts',
    route: postRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
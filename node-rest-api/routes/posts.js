const express = require('express');
const {
  createPost,
  editPost,
  getPost,
  deletePost,
  likeOrDislikePost,
  getTimeline,
} = require('../controllers/posts');

const postRoutes = express.Router();

postRoutes.post('/', createPost);
postRoutes.get('/timeline', getTimeline);
postRoutes.patch('/:id', editPost);
postRoutes.get('/:id', getPost);
postRoutes.delete('/:id', deletePost);
postRoutes.put('/:id/like', likeOrDislikePost);
module.exports = postRoutes;

const express = require('express');
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
} = require('../controllers/users');

const userRoutes = express.Router();

userRoutes.patch('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);
userRoutes.get('/:id', getUser);
userRoutes.put('/:id/follow', followUser);
userRoutes.delete('/:id/unfollow', unfollowUser);

module.exports = userRoutes;

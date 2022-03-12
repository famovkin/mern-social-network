const express = require('express');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const postRoutes = require('./posts');

const routes = express.Router();

routes.use('/api/users', userRoutes);
routes.use('/api', authRoutes);
routes.use('/api/posts', postRoutes);

module.exports = routes;

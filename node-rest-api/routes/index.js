const express = require('express');
const userRoutes = require('./users');
const authRoutes = require('./auth');

const routes = express.Router();

routes.use('/api/users', userRoutes);
routes.use('/api', authRoutes);

module.exports = routes;

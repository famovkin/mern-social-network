const express = require('express');
const userRoutes = require('./users');
const authRoute = require('./auth');

const routes = express.Router();

routes.use('/api/users', userRoutes);
routes.use('/api/register', authRoute);

module.exports = routes;

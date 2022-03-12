const express = require('express');
const { createUser, login } = require('../controllers/auth');

const authRoutes = express.Router();

authRoutes.post('/register', createUser);
authRoutes.post('/login', login);

module.exports = authRoutes;

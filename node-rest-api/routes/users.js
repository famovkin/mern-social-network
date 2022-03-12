const express = require('express');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => res.send('This is USERS route'));

module.exports = userRoutes;

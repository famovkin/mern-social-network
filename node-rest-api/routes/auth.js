const express = require('express');

const authRoute = express.Router();

// REGISTER
authRoute.get('/', (req, res) => res.send('This is AUTH route'));

module.exports = authRoute;

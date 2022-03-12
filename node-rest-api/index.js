const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const { PORT = 8800 } = process.env;
const routes = require('./routes');
require('dotenv').config();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(routes);

app.get('/', (req, res) => res.send('Welcome to homepage'));

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await app.listen(PORT, () => console.log(`Backend server is running on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
}

startApp();

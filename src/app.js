require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const knex = require('knex');
const helmet = require('helmet');
const {
  NODE_ENV,
} = require('./config');
const SweetPepperRouter = require('./peppers/sweet-pepper-router');
const HotPepperRouter = require('./peppers/hot-pepper-router');
const CrazyPepperRouter = require('./peppers/crazy-pepper-router');
const HybridPepperRouter = require('./peppers/hybrid-pepper-router');
const PepperRouter = require('./peppers/pepper-router');

const app = express();

const morganOption =
  NODE_ENV === 'production'
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(
  '/api/sweet_peppers',
  SweetPepperRouter
);
app.use(
  '/api/hot_peppers',
  HotPepperRouter
);
app.use(
  '/api/crazy_peppers',
  CrazyPepperRouter
);
app.use(
  '/api/hybrid_peppers',
  HybridPepperRouter
);
app.use(
  '/api/peppers',
  PepperRouter
);

app.use(function errorHandler(
  error,
  req,
  res,
  next
) {
  let response;
  if (NODE_ENV === 'production') {
    response = {
      error: {
        message: 'server error',
      },
    };
  } else {
    console.error(error);
    response = {
      message: error.message,
      error,
    };
  }
  res.status(500).json(response);
});

module.exports = app;

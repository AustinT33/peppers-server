require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const knex = require('knex')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const SweetPepperRouter = require('./sweetpeppers/sweet-pepper-router')
const HotPepperRouter = require('./hotpeppers/hot-pepper-router')
const CrazyPepperRouter = require('./crazypeppers/crazy-pepper-router')
const HybridPepperRouter = require('./hybridpeppers/hybrid-pepper-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/sweet_peppers', SweetPepperRouter);
app.use('/api/hot_peppers', HotPepperRouter);
app.use('/api/crazy_peppers', CrazyPepperRouter);
app.use('/api/hybrid_peppers', HybridPepperRouter);

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app

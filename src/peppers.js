require('dotenv').config()
const knex = require('knex')
const SweetPepperService = require('./sweetpeppers/sweet-pepper-service')
const HotPepperService = require('./hotpeppers/hot-pepper-service')
const CrazyPepperService = require('./crazypeppers/crazy-pepper-service')
const HybridPepperService = require('./hybridpeppers/hybrid-pepper-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
})

SweetPepperService.getAllSweetPeppers(knexInstance)
    .then(peppers => console.log(peppers));

HotPepperService.getAllHotPeppers(knexInstance)
    .then(peppers => console.log(peppers));

CrazyPepperService.getAllCrazyPeppers(knexInstance)
    .then(peppers => console.log(peppers));

HybridPepperService.getAllHybridPeppers(knexInstance)
.then(peppers => console.log(peppers));


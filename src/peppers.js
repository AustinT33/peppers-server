require('dotenv').config()
const knex = require('knex')
const SweetPepperService = require('./sweetpeppers/sweet-pepper-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

SweetPepperService.getAllSweetPeppers(knexInstance)
    .then(peppers => console.log(peppers))

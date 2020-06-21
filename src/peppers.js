require('dotenv').config()
const knex = require('knex')
const PepperService = require('./peppers/pepper-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
})

PepperService.getAllPeppers(knexInstance)
    .then(() =>
        PepperService.postPepper(knexInstance, {
            id: pepper.id,
            name: pepper.name,
            description: pepper.description,
            image: pepper.image,
        })
    )



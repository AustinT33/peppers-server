const express = require('express')
const SweetPepperService = require('./sweet-pepper-service')

const SweetRouter = express.Router()
const bodyParser = express.json()

const serializePepper = pepper => ({
    name: pepper.name,
    description: pepper.description,
    image: pepper.image,
})

SweetRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        SweetPepperService.getAllSweetPeppers(knexInstance)
            .then(peppers => {
                res.json(peppers.map(serializePepper))
            })
            .catch(next)
    })

    module.exports = SweetRouter
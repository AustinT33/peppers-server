const express = require('express')
const HotPepperService = require('./hot-pepper-service')

const HotRouter = express.Router()
const bodyParser = express.json()

const serializePepper = pepper => ({
    name: pepper.name,
    description: pepper.description,
    image: pepper.image,
})

HotRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        HotPepperService.getAllHotPeppers(knexInstance)
            .then(peppers => {
                res.json(peppers.map(serializePepper))
            })
            .catch(next)
    })

    module.exports = HotRouter
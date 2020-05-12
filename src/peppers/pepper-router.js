const express = require('express');
const PepperService = require('./pepper-service');

const PepperRouter = express.Router();
const bodyParser = express.json();

const serializePepper = (pepper) => ({
  id: pepper.id,
  name: pepper.name,
  description: pepper.description,
  image: pepper.image,
});

PepperRouter.route('/').get(
  (req, res, next) => {
    const knexInstance = req.app.get(
      'db'
    );
    PepperService.getAllPeppers(
      knexInstance
    )
      .then((peppers) => {
        res.json(
          peppers.map(serializePepper)
        );
      })
      .catch(next);
  }
);

PepperRouter
  .route('/:id')
  .all((req, res, next) => {
    PepperService.getById(
      req.app.get('db'),
      req.params.id
    )
      .then(pepper => {
        if(!pepper) {
          return res.status(404).json({
            error: {message: `Pepper not found`}
          })
        }
        res.pepper = pepper
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializePepper(res.pepper))
  });

module.exports = PepperRouter;
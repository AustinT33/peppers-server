const express = require('express');
const PepperService = require('./pepper-service');

const SweetRouter = express.Router();
const bodyParser = express.json();

const serializePepper = (pepper) => ({
  id: pepper.id,
  name: pepper.name,
  description: pepper.description,
  image: pepper.image,
});

SweetRouter.route('/').get(
  (req, res, next) => {
    const knexInstance = req.app.get(
      'db'
    );
    PepperService.getAllSweetPeppers(
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

SweetRouter
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
  });

module.exports = SweetRouter;

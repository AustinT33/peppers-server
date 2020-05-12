const express = require('express');
const PepperService = require('./pepper-service');

const HybridRouter = express.Router();
const bodyParser = express.json();

const serializePepper = (pepper) => ({
  name: pepper.name,
  description: pepper.description,
  image: pepper.image,
});

HybridRouter.route('/').get(
  (req, res, next) => {
    const knexInstance = req.app.get(
      'db'
    );
    PepperService.getAllHybridPeppers(
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

module.exports = HybridRouter;

const express = require('express');
const PepperService = require('./pepper-service');

const HotRouter = express.Router();
const bodyParser = express.json();

const serializePepper = (pepper) => ({
  name: pepper.name,
  description: pepper.description,
  image: pepper.image,
});

HotRouter.route('/').get(
  (req, res, next) => {
    const knexInstance = req.app.get(
      'db'
    );
    PepperService.getAllHotPeppers(
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

module.exports = HotRouter;

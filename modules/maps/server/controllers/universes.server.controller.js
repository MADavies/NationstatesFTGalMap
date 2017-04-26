'use strict';

var path = require('path'),
  mongoose = require('mongoose'),
  Universe = mongoose.model('Universe'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Universe
 */
exports.create = function (req, res) {
  var universe = new Universe(req.body);
  universe.owner = req.user;

  universe.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(universe);
    }
  });
};

/**
 * Get a Universe
 */
exports.read = function (req, res) {
  res.json(req.universe);
};

/**
 * Update a Universe
 */
exports.update = function (req, res) {
  var universe = req.universe;

  universe.name = req.body.name;
  universe.desc = req.body.desc;
  universe.managers = req.body.managers;
  universe.nations = req.body.universe;

  universe.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(universe);
    }
  });
};

/**
 * Delete a Universe
 */
exports.delete = function (req, res) {
  var universe = req.universe;

  universe.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(universe);
    }
  });
};

/**
 * List all Universes a user has access to
 */
exports.list = function (req, res) {
  Universe.find()
    .sort('-created')
    .populate('owner', 'displayName')
    .exec(function (err, universes) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(universes);
      }
    });
};

/**
 * Middleware
 */
exports.universeByID = function (req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Universe is invalid'
    });
  }

  Universe.findById(id)
    .populate('owner', 'displayName')
    .exec(function (err, universe) {
      if (err) {
        return next(err);
      } else if (!universe) {
        return res.status(400).send({
          message: 'No universe with that identifier has been found'
        });
      }
      req.universe = universe;
      next();
    });
};
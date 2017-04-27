'use strict';

var universePolicy = require('../policies/universes');
var universes = require('../controllers/universes');

module.exports = function (app) {
  app.route('/api/universes').all(universePolicy.isAllowed)
    .get(universes.list)
    .post(universes.create);

  app.route('/api/universes/:universeId').all(universePolicy.isAllowed)
    .get(universes.read)
    .put(universes.update)
    .delete(universes.delete);

  app.param('universeId', universes.universeByID);
};

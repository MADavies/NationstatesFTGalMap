'use strict';

var universePolicy = require('../policies/universes.server.policy'),
  universes = require('../controllers/universes.server.controller');

module.exports = function (app) {

  /*****************************************
   * Universes
   *****************************************/
  app.route('/api/universes').all(universePolicy.isAllowed)
    .get(universes.list)
    .post(universes.create);

  app.route('/api/universes/:universeId').all(universePolicy.isAllowed)
    .get(universes.read)
    .put(universes.update)
    .delete(universes.delete);

  app.param('universeId', universes.universeByID);

  /*****************************************
   * Nations
   *****************************************/

  /*****************************************
   * Systems
   *****************************************/

  /*****************************************
   * System Objects
   *****************************************/
  
};

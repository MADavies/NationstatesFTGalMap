'use strict';

var systemsPolicy = require('./policy.js');
var systems = require('../controllers/systems.js');

module.exports = function (app) {
  app.route('/api/systems').all(systemsPolicy.isAllowed)
    .post(systems.create);

  app.route('/api/systems/:systemId').all(systemsPolicy.isAllowed)
    .get(systems.view)
    .put(systems.update)
    .delete(systems.delete);

  app.param('systemId', systems.systemByID);
};

'use strict';

var acl = require('acl');

acl = new acl(new acl.memoryBackend());

exports.invokeRolesPolicies = function() {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: '/api/universes',
      permissions: '*'
    }, {
      resources: '/api/universes/:universeId',
      permissions: '*'
    }]
  }, {
    roles: ['user'],
    allows: [{
      resources: '/api/universes',
      permissions: ['get', 'post']
    }, {
      resources: '/api/universes/:universeId',
      permissions: ['get']
    }]
  }]);
};

exports.isAllowed = function (req, res, next) {
  var roles = (req.user) ? req.user.roles : ['guest'];

  // Allow creator total control over a universe
  if (req.universe && req.user && req.universe.owner.id === req.user.id) {
    return next();
  }

  acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function (err, isAllowed) {
    if (err) {
      return res.status(500).send('Unexpected authorization error');
    } else {
      if (isAllowed) {
        return next();
      } else {
        return res.status(403).json({
          message: 'User is not authorized'
        });
      }
    }
  });
};
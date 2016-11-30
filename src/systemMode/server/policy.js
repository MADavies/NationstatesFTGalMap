'use strict';

var acl = require('acl');
acl = new acl(new acl.memoryBackend());

/**
 * System permissions setup
 */
exports.invokeRolesPolicies = function() {
  acl.allow([
    {
      roles: ['admin'],
      allows: [
        {
          resources: '/api/systems',
          permissions: '*'
        },
        {
          resources: '/api/systems/:systemId',
          permissions: '*'
        }
      ]
    },
    {
      roles: ['user'],
      allows: [
        {
          resources: '/api/systems',
          permissions: ['post']
        }
      ]
    },
  ])
};

/**
 * Allow editing if Admin or user is owner of System.
 */
exports.isAllowed = function (req, res, next) {
  var roles = (req.user) ? req.user.roles : ['guest'];

  if (req.system && req.user && req.system.user.id === req.user.id) {
    return next();
  }

  // TODO: allow visibility to users in a group this system is shared with

  acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function(err, isAllowed) {
    if (err) {
      return res.status(500).send('Unexpected authorization error'); 
    } else {
      if (isAllowed) {
        return next();
      } else {
        return res.status(403).json({ message: 'User is not authorized' });
      }
    }
  });
};

'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('maps').factory('Universes', ['$resource',
  function ($resource) {
    return $resource('api/universes/:universeId', {
      universeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

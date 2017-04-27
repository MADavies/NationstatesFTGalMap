'use strict';
angular.module('map')
.factory('Universes', function ($resource) {
  return $resource('api/universes/:universeId', {
    universeId: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
});
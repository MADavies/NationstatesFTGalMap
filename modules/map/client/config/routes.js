'use strict';

// Setting up route
angular.module('map').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      // Map
      .state('map', {
        url: '/map',
        templateUrl: 'modules/map/client/views/view-map.html'
      });
  }
]);

'use strict';

// Setting up route
angular.module('maps').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      // Map
      .state('maps', {
        url: '/map',
        templateUrl: 'modules/maps/client/views/view-map.client.view.html'
      })

      // Manage
      .state('manage', {
        abstract: true,
        url: '/manage',
        template: '<ui-view/>'
      })

      .state('manage.nations', {
        url: '/nation',
        templateUrl: 'modules/maps/client/views/manage-nation.client.view.html'
      })

      .state('manage.universes', {
        url: '/universe',
        templateUrl: 'modules/maps/client/views/manage-universe.client.view.html'
      });
  }
]);

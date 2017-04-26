'use strict';

// Setting up route
angular.module('maps').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('maps', {
        abstract: true,
        url: '/map',
        template: '<ui-view/>'
      })
      .state('maps.view', {
        url: '',
        templateUrl: 'modules/maps/client/views/view-map.client.view.html'
      });
  }
]);

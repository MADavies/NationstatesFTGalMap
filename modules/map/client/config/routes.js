'use strict';
angular.module('map')
.config(function ($stateProvider) {
  $stateProvider
    .state('map', {
      abstract: true,
      url: '/map',
      template: '<ui-view/>'
    })

    .state('map.view', {
      url: '/:universeId',
      controller: 'MapController',
      controllerAs: 'MapCtrl',
      templateUrl: 'modules/map/client/views/view-map.html',
      data: {
        roles: ['user', 'admin']
      }
    });
});
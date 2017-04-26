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
      .state('universes', {
        abstract: true,
        url: '/universes',
        template: '<ui-view/>'
      })

      .state('universes.list', {
        url: '',
        templateUrl: 'modules/maps/client/views/universe-list.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })

      .state('universes.create', {
        url: '/create',
        templateUrl: 'modules/maps/client/views/universe-create.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })

      .state('universes.view', {
        url: '/:universeId',
        templateUrl: 'modules/maps/client/views/universe-view.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })

      .state('universes.edit', {
        url: '/:universeId',
        templateUrl: 'modules/maps/client/views/universe-edit.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })     

      .state('manage.nations', {
        url: '/nation',
        templateUrl: 'modules/maps/client/views/manage-nation.client.view.html'        
      })
  }
]);

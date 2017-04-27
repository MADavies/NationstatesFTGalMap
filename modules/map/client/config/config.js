'use strict';

// Configuring the Articles module
angular.module('map').run(['Menus',
  function (Menus) {
    // Maps Item
    Menus.addMenuItem('topbar', {
      title: 'Map',
      state: 'map.view',
      roles: ['user', 'admin']
    });
  }
]);

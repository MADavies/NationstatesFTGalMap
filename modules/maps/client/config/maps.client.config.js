'use strict';

// Configuring the Articles module
angular.module('maps').run(['Menus',
  function (Menus) {
    // Maps Item
    Menus.addMenuItem('topbar', {
      title: 'Map',
      state: 'maps',
      roles: ['user']
    });

    // Manage Dropdown
    Menus.addMenuItem('topbar', {
      title: 'Manage',
      state: 'manage',
      type: 'dropdown',
      roles: ['user']
    });

    Menus.addSubMenuItem('topbar', 'manage', {
      title: 'Nations',
      state: 'manage.nations',
      roles: ['user']
    });

    Menus.addSubMenuItem('topbar', 'manage', {
      title: 'Universes',
      state: 'manage.universes',
      roles: ['user']
    });    
  }
]);

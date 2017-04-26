'use strict';

// Configuring the Articles module
angular.module('maps').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Maps',
      state: 'maps',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'maps', {
      title: 'View Map',
      state: 'maps.view'
    });
  }
]);

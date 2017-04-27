'use strict';
angular.module('map')
.controller('MapController', function ($scope, $state, $stateParams, Universes) {
  var self = this;

  function checkUniverseValid() {
    if ($stateParams.universeId) {
      // If we have a defined universe, check the user really has access.
      Universes.get({ universeId: $stateParams.universeId }).$promise
        .then(function (universe) {
          if (universe)
            return;
          else
            _redirectToUniverse(); // If we have an invalid universe, fetch all user universes and redirect
        });
    } else {
      // If we have no defined universe, fetch all user universes and redirect
      _redirectToUniverse();
    }

    function _redirectToUniverse() {
      Universes.query().$promise
        .then(function (universes) {
          // User cannot delete their default universe, so we're guarenteed to always have at least one
          $state.go('map.view', { universeId: universes[0]._id });
        });
    }
  }

  checkUniverseValid();
});
'use strict';

// Articles controller
angular.module('map').controller('ManageUniverseController', ['$scope', '$stateParams', '$location', 'Authentication', 'Universes',
  function ($scope, $stateParams, $location, Authentication, Universes) {
    $scope.authentication = Authentication;

    $scope.find = function () {
      $scope.universes = Universes.query();
    };

    $scope.findOne = function () {
      $scope.universe = Universes.get({
        universeId: $stateParams.universeId
      });
    };
  }
]);

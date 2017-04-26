'use strict';

// Articles controller
angular.module('maps').controller('ManageUniverseController', ['$scope', '$stateParams', '$location', 'Authentication',
  function ($scope, $stateParams, $location, Authentication) {
    $scope.authentication = Authentication;
  }
]);

'use strict';

// Articles controller
angular.module('map').controller('MapController', ['$scope', '$stateParams', '$location', 'Authentication',
  function ($scope, $stateParams, $location, Authentication) {
    $scope.authentication = Authentication;

    var canvas = document.getElementById('mapCanvas');
    var context = canvas.getContext('2d');
    var scale = 1;
    var originx = 0;
    var originy = 0;

    window.addEventListener('resize', resizeCanvas, false);

    var systems = [
      {
        coordinates: { x: 50, y: 50 }
      },
      {
        coordinates: { x: 150, y: 50 }
      },
      {
        coordinates: { x: 30, y: 70 }
      },
      {
        coordinates: { x: 213, y: 450 }
      },
      {
        coordinates: { x: 20, y: 419 }
      },
    ];

    function resizeCanvas() {
      canvas.width = window.innerWidth - (window.innerWidth * 0.2);
      canvas.height = window.innerHeight - (window.innerHeight * 0.2);

      performDraw();
    }
    resizeCanvas();

    function performDraw() {
      context.fillStyle = 'black';
      context.fillRect(originx, originy, canvas.width/scale, canvas.height/scale);

      systems.forEach(function(system) {
        context.beginPath();
        context.arc(system.coordinates.x, system.coordinates.y, 14, 0, 2 * Math.PI);
        context.fillStyle = 'darkgray';
        context.fill();

        context.beginPath();
        context.arc(system.coordinates.x, system.coordinates.y, 12, 0, 2 * Math.PI);
        context.fillStyle = 'darkred';
        context.fill();
      });
    }

    setInterval(performDraw,100);

    canvas.onmousewheel = function (event) {
      event.preventDefault();
      var mousex = event.clientX - canvas.offsetLeft;
      var mousey = event.clientY - canvas.offsetTop;
      var wheel = event.wheelDelta/120;

      var zoom = 1 + wheel/2;

      context.translate(originx, originy);
      context.scale(zoom, zoom);
      context.translate(
        -(mousex / scale + originx - mousex / (scale * zoom)),
        -(mousey / scale + originy - mousey / (scale * zoom))
      );

      originx = (mousex / scale + originx - mousex / (scale * zoom));
      originy = (mousey / scale + originy - mousey / (scale * zoom));
      scale *= zoom;
    };
  }
]);

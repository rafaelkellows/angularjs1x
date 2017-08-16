app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
    { 
      icon: 'imgs/app_market/move.jpg', 
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'imgs/app_market/shutterbugg.jpg', 
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99 
    },
    { 
      icon: 'imgs/app_market/gameboard.jpg', 
      title: 'GAMEBOARD', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'imgs/app_market/forecast.jpg', 
      title: 'Forecast', 
      developer: 'Chico Dusty', 
      price: 2.99 
    } 
  ]
}]);
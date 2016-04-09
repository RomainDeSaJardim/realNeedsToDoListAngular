var app = angular.module('realNeedsToDoListAngular', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/index', {
    templateUrl : 'templates/index.html',
    controller : 'indexCtrl'
  })
  .otherwise({
    redirectTo: '/index'
  });
}]);

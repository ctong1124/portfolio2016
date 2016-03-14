'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [

  'ngRoute',
  'ngAnimate',
  // 'ngTouch',
  'myApp.work',
  'myApp.experience',
  'myApp.skills',
  'myApp.contact',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/work'});
}]);

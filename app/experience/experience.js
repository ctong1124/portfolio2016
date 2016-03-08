'use strict';

angular.module('myApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experience', {
    templateUrl: 'experience/experience.html',
    controller: 'ExperienceCtrl'
  });
}])

.controller('ExperienceCtrl', [function() {

}]);
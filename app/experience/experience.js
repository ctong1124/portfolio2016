'use strict';

angular.module('myApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experience', {
    templateUrl: 'experience/experience.html',
    controller: 'ExperienceCtrl'
  });
}])

.controller('ExperienceCtrl', ['$scope', function($scope) {
	$scope.schools = [
		{
			name: 'Homestead High School',
			location: 'Cupertino, CA',
			dates: 'Class of 2011'
		},
		{
			name: 'Homestead High School',
			location: 'Cupertino, CA',
			dates: 'Class of 2011'
		}
	]

}]);
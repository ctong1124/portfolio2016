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
			name: "Homestead High School",
			location: "Cupertino, CA",
			dates: "Class of 2011", 
			description: [
			{
				"Bachelor of Science": " in Mathematics with a minor in Computer Science",
				"Awards": " cum laude, Dean's Scholarship, Honors Program"
			}]
		},
		{
			name: "Northeastern University",
			location: "Boston, MA",
			dates: "Class of 2016", 
			description: [
			{
				"Bachelor of Science": " in Mathematics with a minor in Computer Science",
				"Awards": " cum laude, Dean's Scholarship, Honors Program"
			}]
		}
	];

	$scope.jobs = [
		{
			name: "Digital Analytics Co-op at Boston Globe Media",
			location: "Boston, MA",
			dates: "July 2013 - December 2013", 
			description: ["This thing 1", "this thing 2"]
		},
		{
			name: "Art Director at Tastemakers Magazine",
			location: "Northeastern University, Boston, MA",
			dates: "May 2013 - December 2014", 
			description: ["This thing 1", "this thing 2"]
		},
		{
			name: "Mathematics Tutor at Northeastern Univeristy",
			location: "Boston, MA",
			dates: "July 2014 - August 2014", 
			description: ["This thing 1", "this thing 2"]
		},
		{
			name: "Graphic Design Intern at Shutterstock",
			location: "New York, New York",
			dates: "January 2015 - April 2015", 
			description: ["This thing 1", "this thing 2"]
		}
	];

}]);
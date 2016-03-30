'use strict';

angular.module('myApp.skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: 'skills/skills.html',
    controller: 'SkillsCtrl',
    animation: 'page-fadein'
  });
}])

.controller('SkillsCtrl', ['$scope', 'myService', function($scope, myService) {

	$scope.pageClass = 'page-skills';

	myService.set();

	$scope.skills = [
		{
			name: "InDesign",
			level: 95,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{
			name: "Photoshop",
			level: 90,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{
			name: "Illustrator",
			level: 75,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{
			name: "Java",
			level: 75,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{
			name: "Javascript",
			level: 70,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{
			name: "JQuery",
			level: 70,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{
			name: "HTML/CSS",
			level: 65,
			description: [
			"this is an example", "this is another example"]
		},
		{

			name: "Python",
			level: 60,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{

			name: "PHP",
			level: 50,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{

			name: "AngularJS",
			level: 25,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		},
		{

			name: "D3",
			level: 15,
			view_description: false,
			description: [
			"this is an example", "this is another example"]
		}
		
	];

	$scope.toggleDescription  = function(skill) {
			if (skill.has_description) {
	      	  return skill.view_description = !skill.view_description;
	      	}
	      	else {
	      		return false;
	      	}
	       
	    };


	$scope.skillLevelString  = function(skill) {
	        return {
	        	"width": skill.level.toString().concat("%")
	        };
	       
	    };



	$scope.interests = [
		{
			name: "Music",
			level: 95,
			view_description: false,
			has_description: true,
			description: [{
				"Perhaps my listening habits interest you": "http://lastfm.com/ctong1124",
				"This is where I keep my playlists": "https://play.spotify.com/user/12121749949"
			}]
		},
		{
			name: "Food",
			level: 90,
			view_description: false,
			has_description: false,
			description: [{
				"this is an example": "link",
				"this is another example": "link2"
			}]
		},
		{
			name: "Tornados",
			level: 85,
			view_description: false,
			has_description: false,
			description: [{
				"this is an example": "link",
				"this is another example": "link2"
			}]
		}
		
	];
}]);
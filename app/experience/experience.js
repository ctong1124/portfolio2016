'use strict';

angular.module('myApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/experience', {
    templateUrl: 'experience/experience.html',
    controller: 'ExperienceCtrl',
    animation: 'page-fadein'
  });
}])

.controller('ExperienceCtrl', ['$scope', '$location','myService', function($scope, $location, myService) {

	$scope.pageClass = 'page-exp';

	$scope.schools = [
		{
			name: "Homestead High School",
			location: "Cupertino, CA",
			dates: "Class of 2011", 
			link: false,
			description: [
			{
				"Academic GPA": " 3.8",
				"Activities": " Design Editor for The Epitaph (school newspaper), Vice President of Forte Music Club, Wind Ensemble, Symphony Orchestra, Red Cross Club"
			}]
		},
		{
			name: "Northeastern University",
			location: "Boston, MA",
			dates: "Class of 2016", 
			link: false,
			description: [
			{
				"Bachelor of Science": " in Mathematics with a minor in Computer Science",
				"Awards:": " cum laude, Dean's Scholarship, Honors Program",
				"GPA:": " 3.517",
				"Relevant coursework:": " Fundamentals of Computer Science I-II, Object-Oriented Design, Logic and Computation, Networks and Distributed Systems, Web Design and Development, Programming for Digital Media, Computer Graphics, Computer Systems, Probability and Statistics, Calculus II-III, Linear Algebra, Real Analysis"
			}]
		}
	];

	$scope.jobs = [
		{
			name: "Digital Analytics Co-op at Boston Globe Media",
			location: "Boston, MA",
			dates: "July 2013 - December 2013", 
			link: false,
			description: [
			{
				"Provided insight and analysis": " of data pertaining to user behavior of the Boston Globe Media websites using Adobe Analytics (formerly Omniture/SiteCataylst)",
				"Worked on a small team": " to support ad hoc data requests from the organization", 
				"Designed data visualizations" : " for analytical reports for Boston Globe Media"
			}]
			
		},
		{
			name: "Art Director at Tastemakers Magazine",
			location: "Northeastern University, Boston, MA",
			dates: "May 2013 - December 2014", 
			link: true,
			idee: "Tastemakers",
			description: [
			{
				"Oversaw all artistic aspects of Tastemakers Magazine,": " Northeastern University’s print and online publication focused on music journalism and criticism",
				"Managed a team of designers": " and illustrators who created print magazine elements",
				"Coordinated with": " writing team and professional printers to meet publishing deadlines", 
				"Designed editorial spreads": " for magazine and event promo material, print and online"
			}]
		},
		 
		{
			name: "Mathematics Tutor at Northeastern Univeristy",
			location: "Boston, MA",
			dates: "July 2014 - August 2014", 
			description: [
			{
				"Tutored for": " Northeastern’s Mathematics department classes including Mathematical Thinking, Calculus I-III, Differential Equations, Linear Algebra, Probability and Statistics",
				"Counseled students": " of different levels of mathematical comprehension"
			}]
		},
		{
			name: "Graphic Design Intern at Shutterstock",
			location: "New York, New York",
			dates: "January 2015 - April 2015", 
			link: true,
			idee: "Shutterstock",
			description: [
			{
				"Created design assets": " and curated Shutterstock assets for marketing campaigns serving North America, South America, Asia and European markets",
				"Designed promotional material": " for Shutterstock affiliated events such as Pixels of Fury and AIGA Portfolio Night alongside Shutterstock Art Directors and Events staff", 
				"Made executive presentations" : " slide decks and informational material for internal clients to aid business growth and development",
			}]
		},
		{
			name: "Your Project?",
			// location: "???",
			// dates: "???", 
			link: true,
			idee: "contact",
			description: [
			{
				"I'm a recent graduate looking for a entry-level position.": "",
				"": "If you are even slightly impressed by my work, please get in contact with me!" 
			}]
		}
	];

	$scope.clickJob = function(job) {
	        if (job.link) {
	        	console.log(job.idee == "contact");
	        	if (job.idee == "contact") {
	        		$location.path("/contact");
	        	}
	        	else {
		        	myService.set(job.idee);
		        	$location.path('#/work');
		        }
	        }
	        
	       
	    };

	

}]);
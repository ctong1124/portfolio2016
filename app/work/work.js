'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', ['$scope', function($scope) {
	$scope.tiles = [
		{
			name: 'A Guide to House Music',
			type: 'Web Development, UI',
			cover: 'img/record.png',
			descrip: 'Lol kill me now',
			show_title: false
		},
		{
			name: 'Modelling the Zombie Apocalypse',
			type: 'Web Development, UI',
			cover: 'img/record.png',
			descrip: 'Maybe i die',
			show_title: false
		},
		{
			name: 'Tastemakers Magazine',
			type: 'Art Direction/Graphic Design',
			cover: 'img/record.png',
			descrip: 'Lol kill me now',
			show_title: false
		},
		{
			name: 'Shutterstock',
			type: 'Graphic Design',
			cover: 'img/record.png',
			descrip: 'Lol kill me now',
			show_title: false
		},
		{
			name: 'Spot',
			type: 'Web Development, UI',
			cover: 'img/record.png',
			descrip: 'Lol kill me now',
			show_title: false
		}
	];

	// $scope.hover = function(tile) {
	//         // Shows/hides the delete button on hover
	//         return tile.show_title = ! tile.show_title;
	//     };
}]);
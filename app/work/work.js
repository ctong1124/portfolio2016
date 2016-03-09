'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', ['$scope', function($scope) {
	
    // $scope.hoverActive = false;
  
	$scope.tiles = [
		{
			name: 'Spot',
			type: 'Web Development, UI',
			cover: 'img/spot_iphone.jpg',
			cover_size:'60em 40em, cover',
			cover_pos: '80% 50%',
			descrip: 'Lol kill me now',
			show_title: false,
			black_overlay: false
		},
		{
			name: 'A Guide to House Music',
			type: 'Web Development, UI',
			cover: 'img/record.png',
			cover_size:'90em 60em, cover',
			cover_pos: '65% 50%',
			descrip: 'Lol kill me now',
			show_title: false,
			black_overlay: false
		},
		
		{
			name: 'Shutterstock',
			type: 'Graphic Design',
			cover: 'img/moo_cover.png',
			// cover_size:'45em 30em, cover',
			// cover_pos: '20% 70%',
			cover_size:'60em 30em, cover',
			cover_pos: '72% 70%',
			descrip: 'Lol kill me now',
			show_title: false,
			black_overlay: false
		},
		
		

		{
			name: 'Modelling the Zombie Apocalypse',
			type: 'Web Development, UI',
			cover: 'img/ipad_apocalypse.jpg',
			cover_size:'45em 29em, cover',
			cover_pos: '40% 100%',
			descrip: 'Maybe i die',
			show_title: false,
			black_overlay: false
		},
		
		{
			name: 'Tastemakers Magazine',
			type: 'Art Direction/Graphic Design',
			cover: 'img/tmm_mockup.jpg',
			cover_size:'66em 44em, cover',
			cover_pos: '50% 40%',
			descrip: 'Lol kill me now',
			show_title: false,
			black_overlay: false
		},
		
		
	];



	$scope.hover = function(tile) {
	        // Shows/hides the delete button on hover
	        // angular.forEach($scope.tiles, function(tile, key) {
	        // 	tile.black_overlay =!tile.black_overlay;
	        // });
	        return tile.show_title = ! tile.show_title;
	       
	    };

    // $scope.blackOverlayHuh = function(hoverActive) {
    //     // Shows/hides the delete button on hover
    //     return hoverActive;
    // };


}]);
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
			name: "Spot",
			idee: "Spot",
			type: "Web Development, UI",
			col_size: "col6",
			cover: "img/spot_iphone.jpg",
			cover_size:"60em 40em, cover",
			cover_pos: "80% 50%",
			descrip: "Lol kill me now",
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		{
			name: "A Guide to House Music",
			idee: "A",
			type: "Web Development, UI",
			col_size: "col6",
			cover: "img/record.png",
			cover_size:"90em 60em, cover",
			cover_pos: "65% 50%",
			descrip: "Lol kill me now",
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		{
			name: "Shutterstock",
			idee: "Shutterstock",
			type: "Graphic Design",
			col_size: "col6",
			cover: "img/moo_cover.png",
			// cover_size:"45em 30em, cover",
			// cover_pos: "20% 70%",
			cover_size:"60em 30em, cover",
			cover_pos: "72% 70%",
			descrip: "Lol kill me now",
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		
		

		{
			name: "Modelling the Zombie Apocalypse",
			idee: "Modelling",
			type: "Web Development, UI",
			col_size: "col6",
			cover: "img/ipad_apocalypse.jpg",
			cover_size:"45em 29em, cover",
			cover_pos: "40% 100%",
			descrip: "Maybe i die",
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		
		{
			name: "Tastemakers Magazine",
			idee: "Tastemakers",
			type: "Art Direction/Graphic Design",
			cover: "img/tmm_mockup.jpg",
			col_size: "col6",
			cover_size:"66em 44em, cover",
			cover_pos: "50% 40%",
			descrip: "Lol kill me now",
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		
		
	];



	$scope.hover = function(tile) {
	        // Shows/hides the delete button on hover
	        return tile.show_title = ! tile.show_title;
	       
	    };

	 //clicking on tile 
	$scope.click = function(tile) {

		var index = $scope.tiles.indexOf(tile);
		if ((index%2) == 1) {
			var newcolsizeindex = index-1;
		}

		var forindex = 0;
		angular.forEach($scope.tiles, function(thistile, key) {
			//reset col size to 6
			thistile.col_size = 'col6';
			if (forindex == newcolsizeindex) {
				thistile.col_size = 'col12';
			}
			thistile.show_expanded = false;
			thistile.black_overlay = true;
			forindex++;
		});

		tile.show_expanded = true;


		
		
		return tile.show_expanded;

			
	    };

	



	$scope.clickX = function(tile) {
		angular.forEach($scope.tiles, function(thistile, key) {
			//black out other tiles
			thistile.black_overlay =!thistile.black_overlay;
			//change col size back down
			thistile.col_size = 'col6';

		});	
	    return tile.show_expanded =! tile.show_expanded;	
	    };    


	// slider
    $scope.slides = [
		{
			image: "img/spot_iphone.jpg",
			size:"60em 40em, cover",
			pos: "center",
			description: "Lol kill me now"
		},
		{
			
			image: "img/record.png",
			size:"60em 40em, cover",
			pos: "center",
			description: "Lol kill me now",
			
		},
		{
			
			image: "img/moo_cover.png",
			size:"60em 30em, cover",
			pos: "center",
			description: "Lol kill me now",
			
		},
		{
			
			image: "img/ipad_apocalypse.jpg",
			size:"60em 40em, cover",
			pos: "center",
			description: "Maybe i die",
		},
		{
			
			image: "img/tmm_mockup.jpg",
			size:"66em 44em, cover",
			pos: "center",
			description: "Lol kill me now",
			
		},
		
		
	];

	$scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };



}])

.directive('scrollOnClick', function(){
	return {
	    restrict: 'A',
	    link: function(scope, $elm) {
	      $elm.on('click', function() {

		      	// var scrolltop = 'scrollTop';
		      	var scrollto = parseInt($(this).siblings(".expanded").offset().top);
		      	console.log(scrollto);
		      	// var scrollObject = {};
		      	// scrollObject[scrolltop] = scrollto;
		      	// console.log(scrollObject);
		      	var scrollObject = {scrollTop: scrollto};
		        $("body").delay("fast").animate(scrollObject, "slow");

	      });
	    }
  	}
})

.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                	var backgroundpos = element.css("background-position");
                	var xpos = parseInt(backgroundpos.split("%")[0]);
                	var xposstring = toString(xpos*4) + " " + element.css("background-position").split(" ")[1];
                    TweenMax.to(element, 0.5, {backgroundPosition:  xposstring, onComplete: done });                   
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                	element.removeClass('ng-hide');

                	var backgroundpos = element.css("background-position");
                	var xpos = parseInt(backgroundpos.split("%")[0]);
                	var xposstring = toString(xpos*4) + " " + backgroundpos.split(" ")[1];
                    TweenMax.set(element, { backgroundPosition:  xposstring});


                    TweenMax.to(element, 0.5, {backgroundPosition: backgroundpos, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

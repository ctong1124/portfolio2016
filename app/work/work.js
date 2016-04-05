'use strict';



angular.module('myApp.work', ['ngRoute','ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'work/work.html',
    controller: 'WorkCtrl',
    animation: 'page-fadein'
  });
}])



.controller('WorkCtrl', ['$scope', '$window', 'myService', function($scope, $window ,myService) {

	$scope.pageClass = 'page-work';

	//window width
	$scope.screenWidth = $window.innerWidth;
	
   	// console.log($scope.screenWidth);

   	// resize pictures in slider for mobile
   	$scope.picstyles = function(tile) {
   		if ($scope.screenWidth < 550) {
   			return {
   				"background-size" : tile.mob_size,
   				"background-position" : tile.mob_pos
   			}
   		}
   		else {
   			return {
   				"background-size" : tile.size,
   				"background-position" : tile.pos
   			}
   		}
   		}
   	


   	// var w = angular.element($window);
   	// $scope.$watch(
   	//   function () {
   	//     return $window.innerWidth;
   	//   },
   	//   function (value) {
   	//     $scope.windowWidth = value;
   	//     console.log($scope.windowWidth);
   	//   },
   	//   true
   	// );

   	// w.bind('resize', function(){
   	//   $scope.$apply();
   	// });

  	// tile content 
	$scope.tiles = [
		{
			name: "Spot",
			idee: "Spot",
			type: "Web Development, UI",
			col_size: "col6",
			cover: "img/spot/spot_iphone.jpg",
			cover_size:"60em 40em, cover",
			cover_pos: "80% 50%",
			descrip: "Spot is the front-end prototype of a collaborative music playlist web application. It was designed for party-goers who can independently add songs to a playlist on their mobile device and downvote and upvote songs to determine what plays next. Spot was a group project for a Human-Computer Interaction course where the entire process of design, implementation and evaluation of the product was completed. In developing the site, techinques such as ethnographic study, requirements analysis, scenario-based design, paper prototyping, computer prototyping, usability analysis and evaluation were used to develop the user interface.",
			haslinks: true,
			issues: [{
				"Mobile emulator for site": "http://mobiletest.me/apple_iphone_5/2983587"
			}],
			has_slider: true,
			slider: [
				// {
				// 	image: "img/spot/spot_iphone.jpg",
				// 	size:"60em 40em, cover",
				// 	pos: "center",
				// 	mob_size: "30em 20em, cover",
				// 	mob_pos: "right center"
				// },

				{
					
					image: "img/spot/spot_screens.jpg",
					size:"54em 36em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
						
				},
				{
					
					image: "img/spot/spot_sketches.jpg",
					size:"54em 36em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/spot/spot_storyboard.jpg",
					size:"54em 36em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					image: "img/spot/spot_paper.jpg",
					size:"54em 36em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
				}
				
			],
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
			exp_size: "90em 60em, cover",
			exp_pos: "65% 50%",
			descrip: "\"A Guide to House Music\" is a informational site made for a Web Design and Development course. The content was aggregated from many existing site but the design and development was original. ",
			haslinks: true,
			issues: [{
				"Link to project": "http://www.carisatong.com/house"
			}],
			has_slider: false,

			img_link: "http://www.carisatong.com/house",
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		{
			name: "Shutterstock",
			idee: "Shutterstock",
			type: "Graphic Design",
			col_size: "col6",
			cover: "img/ss/moo_cover.png",
			cover_size:"60em 30em, cover",
			cover_pos: "72% 70%",
			descrip: "I worked at Shutterstock as a graphic design co-op in their Marketing Department, designing digital and print media. I often collaborated with the Events staff to design materials and collateral for use in events such as Shutterstock's Pixels of Fury, AIGA's Portfolio Night and WWPI's Wedding and Photography Expo. My other responsibilities included curating Shutterstock assets, including photos and vectors, for use in marketing campaigns.",
			haslinks: false,
			// issues: [{
			// 	"Pixels of Fury Notebooks": "https://www.instagram.com/p/0dYKFomAW3/",
			// 	"Pixels of Fury Flipbook": "https://www.instagram.com/p/1TnySIGfo1/",
			// 	"PN notebook": "https://www.instagram.com/p/29qkOIovRY/"
			// }],
			has_slider: true,
			slider: [
				{
					
					image: "img/ss/moo_cover.png",
					size:"80em 40em, cover",
					pos: "center",
					mob_size: "20em 10em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/ss/moo_mockup.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/ss/templates1.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					image: "img/ss/templates2.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
				}
			],
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
			cover_size:"48em 32em, cover",
			cover_pos: "40% 100%",
			exp_size: "60em 40em, cover",
			exp_pos: "center",
			descrip: "\"Modelling the Zombie Apocalypse\" is a site designed for my Mathematics capstone. The site uses D3 to create the graph and visualization for zombie/human population systems during a hypothetical Zombie Apocalypse.",
			haslinks: true,
			issues: [{
				"Link to project": "http://carisatong.com/capstone/graph.html"
			}],
			img_link: "http://carisatong.com/capstone/graph.html",
			has_slider: false,
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
			descrip: "Tastemakers Magazine is Northeastern University's only publication for music criticism and review. As Art Director, I oversaw all visual elements of the organization, as well as designed for print and digital marketing campaigns. The design of the magazine incorporated content from photographers as well as illustrated work.",
			issues: [{
				"Issue 33": "http://tastemakersmag.com/media/issues/2013/issue-33/",
				"Issue 34": "http://tastemakersmag.com/media/issues/2013/issue-34/" ,
				"Issue 35": "http://tastemakersmag.com/media/issues/2014/issue-35/", 
				"Issue 36": "http://tastemakersmag.com/uncategorized/2014/issue-36-2/",
				"Issue 37": "http://tastemakersmag.com/media/issues/2015/15647/"
			}],
			haslinks: true,
			has_slider: true,
			slider: [
				{
					image: "img/tmm_mockup.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"					
				},
				{
					image: "img/tmm/modernmixtape1.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
				},
				{
					
					image: "img/tmm/modernmixtape2.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/tmm/shoegazing1.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/tmm/shoegazing2.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/tmm/wilco.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/tmm/haerts1.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/tmm/haerts2.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				},
				{
					
					image: "img/tmm/haerts3.jpg",
					size:"60em 40em, cover",
					pos: "center",
					mob_size: "30em 20em, cover",
					mob_pos: "center"
					
					
				}
			],
			show_title: false,
			black_overlay: false,
			show_expanded: false
		},
		
		
	];

	// click on tile and expand for more information
	$scope.click = function(tile) {

		$scope.currentIndex = 0;

		// fill up missing space from tile expansion and black out other tiles
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



	//if sent to work page from experience page, then have that page expanded
	$scope.fromExperience = myService.get();
	if (typeof $scope.fromExperience === 'string' || $scope.fromExperience instanceof String) {
		angular.forEach($scope.tiles, function(thistile, key) {
			if(thistile.idee == $scope.fromExperience) {
				// console.log($scope.fromExperience);
				$scope.click(thistile);
				// $("body").animate({scrollTop: $("#Tastemakers").offset().top}, "slow");
				// $('body, html, #Tastemakers').scrollTop(0);
				// $("#Tastemakers").animate({ scrollTop: 0 }, "fast");
			}
		});
	}
	

	//hover on tile function
	$scope.hover = function(tile) {
	        return tile.show_title = ! tile.show_title;
	       
	    };

	 // $scope.headerHover = function(string) {
	 // 	console.log("something");
	 // 	if ( angular.element('#'+string).length ) {
	 // 		console.log(true);
	 // 	    return true;
	 // 	}
	 // 	else {
	 // 		console.log(false);
	 // 		return false;
	 // 	}
	 // };

	
	
	$scope.clickXHelper = function() {
		angular.forEach($scope.tiles, function(thistile, key) {
			//black out other tiles
			thistile.black_overlay =!thistile.black_overlay;
			//change col size back down
			thistile.col_size = 'col6';
		});	
	} 


	$scope.clickX = function(tile) {	
		
		$scope.clickXHelper();

	    return tile.show_expanded =! tile.show_expanded;	
	    };   

	

	// slider arrow functionality
	$scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function (slider) {
            $scope.currentIndex = ($scope.currentIndex < slider.length - 1) ? ++$scope.currentIndex : 0;
        };

    $scope.nextSlide = function (slider) {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : slider.length - 1;
    };

    $scope.keypress = function($event, slider) {
    	console.log("keypress");
    	var keyCode = $event.which || $event.keyCode;
    	if (keyCode === 37) {
    		console.log("leftarrow");
    		$scope.prevSlide(slider);
    	}
    	else if (keyCode === 39) {
    		console.log("rightarrow");
    		$scope.nextSlide(slider);    		
    	}
    }



}])

.directive('scrollOnClick', ['$window', function($window) {
	return {
	    restrict: 'A',
	    link: function(scope, $elm, attrs) {
	      $elm.on('click', function() {
	      	if($window.innerWidth<700) {
	      		$("body").animate({scrollTop: $(this).offset().top}, "slow");
	      	}
	      	else {

		        var openindex = 100;
		        angular.forEach(scope.tiles, function(thistile, key) {
		        	if(thistile.show_expanded) {
		        		return openindex = key;
		        	}
		        });

		        var clickedindex = scope.$index;


		        if (clickedindex > openindex) {
		        	if ((openindex == 0) || (((openindex % 2) == 1) && ((clickedindex % 2) == 0))) {
		        		$("body").animate({scrollTop: $(this).offset().top - 550}, "slow");
		        	} 
		        	else if (openindex == 2) {
		        		$("body").animate({scrollTop: $(this).offset().top - 420}, "slow");
		        	}
		        	else {
		        		$("body").animate({scrollTop: $(this).offset().top -200}, "slow");
		        	}
		        }
		        else {
		        	if((clickedindex == 1) || (clickedindex == 3)) {
		        		$("body").animate({scrollTop: $(this).offset().top + 400}, "slow");
		        	}
		        	else {
		        		$("body").animate({scrollTop: $(this).offset().top}, "slow");
		        	}
		        }
		    }
	      });
	    }
  	}
}])


.animation('.slide-animation', function () {
        return {
            // addClass: function (element, className, done) {
            //     if (className == 'ng-hide') {
            //     	var backgroundpos = element.css("background-position");
            //     	console.log(backgroundpos);
            //     	var xpos = parseInt(backgroundpos.split("%")[0]);
            //     	console.log(xpos);
            //     	var xposstring = xpos*4 + " " + element.css("background-position").split(" ")[1];
            //     	console.log(xposstring);
            //         TweenMax.to(element, 0.5, {backgroundPosition:  xposstring, onComplete: done });                   
            //     }
            //     else {
            //         done();
            //     }
            // },
            // removeClass: function (element, className, done) {
            //     if (className == 'ng-hide') {
            //     	element.removeClass('ng-hide');

            //     	var backgroundpos = element.css("background-position");
            //     	var xpos = parseInt(backgroundpos.split("%")[0]);
            //     	var xposstring = toString(xpos*4) + " " + backgroundpos.split(" ")[1];
            //         TweenMax.set(element, { backgroundPosition:  xposstring});


            //         TweenMax.to(element, 0.5, {backgroundPosition: backgroundpos, onComplete: done });
            //     }
            //     else {
            //         done();
            //     }
            // }
        };
    });

'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', 'myService', function($scope, myService) {

	myService.set();

	$scope.hoveringHuh = false;
	$scope.copied = false;
	$scope.hover = function() {
		return $scope.hoveringHuh = ! $scope.hoveringHuh;

	};

	$scope.click = function() {
		return $scope.copied = true;

	};

	// copy e-mail address

	var clientText = new ZeroClipboard( $("#text-to-copy"), {
	    moviePath: "ZeroClipboard.swf",
	    debug: false
	} );

	clientText.on( "ready", function( readyEvent ) {

	  clientText.on( "aftercopy", function( event ) {
	    // $('#copied').fadeIn(2000).delay(3000).fadeOut(3000);
	    // $scope.copied = true;
	  } );
	} );




}]);
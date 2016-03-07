//Define the AngularJS module for controllers
var app = angular.module('controllerModule',[]);
//Define the Controller for batting and bowling career and implement the Scope
app.controller('battingbowlingcareerController', function ($scope, $http) {
	//Used to show and hide HTML partial view for batting career
	$scope.boolBatting = false;
	//Used to show and hide HTML partial view for bowling career
	$scope.boolBowling = false;
	//Display a HTML partial view for batting career on button click
	$scope.showBattingDiv = function(){
		$scope.boolBatting = true;
		$scope.boolBowling = false;
	}
	//Display a HTML partial view for batting career on button click
	$scope.showBowlingDiv = function(){
		$scope.boolBowling = true;
		$scope.boolBatting = false;
	}
	//Getting the data from JSON file using Angular http service
	$http.get('data.json').success(function(data) {
		$scope.battingData = data.battingData;
		$scope.bowlingData = data.bowlingData;
	});
	
	
});


var app = angular.module('controllerModule',[]);

app.controller('battingController', function ($scope, $http) {
	
	$scope.boolBatting = false;
	$scope.boolBowling = false;
	$scope.showBattingDiv = function(){
		$scope.boolBatting = true;
		$scope.boolBowling = false;
	}
	$scope.showBowlingDiv = function(){
		$scope.boolBowling = true;
		$scope.boolBatting = false;
	}
	
	$http.get('JS Source Files/Controllers/data.json').success(function(data) {
		$scope.battingData = data.battingData;
		console.log(data.battingData);
		$scope.bowlingData = data.bowlingData;
	});
	
	
});
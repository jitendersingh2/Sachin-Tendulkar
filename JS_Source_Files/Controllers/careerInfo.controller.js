//Getting the getter function of controller module
var app = angular.module('controllerModule');
//Define the Controller and implement the Scope
app.controller('careerInfoController', function ($scope, $http) {
	//Getting the data from JSON file using http service
	$http.get('data.json').success(function(data) {
		$scope.briefBio = data.briefBio;
		$scope.careerinfoData = data.careerinfoData;
	});
});
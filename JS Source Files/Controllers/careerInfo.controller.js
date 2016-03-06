var app = angular.module('controllerModule');

app.controller('careerInfoController', function ($scope, $http) {
	
	$http.get('JS Source Files/Controllers/data.json').success(function(data) {
		$scope.briefBio = data.briefBio;
		$scope.careerinfoData = data.careerinfoData;
	});
});
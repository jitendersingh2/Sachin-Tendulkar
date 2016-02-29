var app = angular.module('mainModule', []);

app.controller('mainController', function ($scope) {
	$scope.match_data = [
	{
	type : "Test",
	totalMatch : 200,
	totalInnings : 329,
	totalRuns : 15921,
	highestScore : 248,
	average : 53.79,
	strikeRate : 54.08,
	hundreds : 51,
	doubleHundreds : 6,
	fiftys : 68,
	fours : 2058,
	sixes : 69
}, { 
	type : "ODI",
	totalMatch : 463,
	totalInnings : 452,
	totalRuns : 18426,
	highestScore : 200,
	average : 44.83,
	strikeRate : 86.24,
	hundreds : 41,
	doubleHundreds : 1,
	fiftys : 96,
	fours : 2016,
	sixes : 195
}, {
	type : "IPL",
	totalMatch : 78,
	totalInnings : 78,
	totalRuns : 2334,
	highestScore : 100,
	average : 33.83,
	strikeRate : 119.82,
	hundreds : 1,
	doubleHundreds : 0,
	fiftys : 13,
	fours : 295,
	sixes : 29
}
	

]});
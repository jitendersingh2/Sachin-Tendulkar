var app = angular.module('controllerModule');

app.controller('bowlingController', function ($scope) {
		
	$scope.bowlingData = [
	{
	type : "Test",
	totalMatch : 200,
	totalInnings : 145,
	wickets : 46,
	bbi : '10/3',
	bbm : '14/3',
	economy : 3.53,
	average : 54.17
	
}, { 
	type : "ODI",
	totalMatch : 463,
	totalInnings : 270,
	wickets : 154,
	bbi : '32/5',
	bbm : '32/5',
	economy : 5.1,
	average : 44.48	
}, {
	type : "IPL",
	totalMatch : 78,
	totalInnings : 4,
	wickets : 0,
	bbi : '7/0',
	bbm : '7/0',
	economy : 9.67,
	average : 0,
	doubleHundreds : 0,
	fiftys : 13,
	fours : 295,
	sixes : 29
}
]});
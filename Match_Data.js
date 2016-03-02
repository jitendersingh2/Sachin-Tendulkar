var app = angular.module('mainModule', ['mainModule1']);

app.controller('mainController', function ($scope) {
	$scope.battingData = [
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

app.controller('mainController1', function ($scope) {

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

app.controller('mainController2', function ($scope) {

$scope.careerinfoData = [
		['Test debut', 'Nov 15, 1989, vs Pakistan, National Stadium'],
		['Last Test', 'Nov 14, 2013, vs West Indies, Wankhede Stadium'],
		['ODI debut', 'Dec 18, 1989, vs Pakistan, Jinnah Stadium'],
		['Last ODI', 'Mar 18, 2012, vs Pakistan, Shere Bangla National Stadium'],
		['T20 debut', 'Dec 01, 2006, vs South Africa, The Wanderers Stadium'],
		['Last T20', 'vs South Africa, Dec 01, 2006, The Wanderers Stadium'],
		['IPL debut', 'vs Chennai Super Kings, May 14, 2008, Wankhede Stadium'],
		['Last IPL', 'vs Sunrisers Hyderabad, May 13, 2013, Wankhede Stadium']
]});

angular.bootstrap(document, ['mainModule', 'mainModule1'])


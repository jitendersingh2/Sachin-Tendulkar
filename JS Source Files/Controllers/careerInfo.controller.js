var app = angular.module('controllerModule');

app.controller('careerInfoController', function ($scope) {

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
var app = angular.module('controllerModule');

<<<<<<< HEAD
app.controller('careerInfoController', function ($scope, $http) {
	
	$http.get('JS Source Files/Controllers/data.json').success(function(data) {
		$scope.briefBio = data.briefBio;
		$scope.careerinfoData = data.careerinfoData;
	});
});
=======
app.controller('careerInfoController', function ($scope) {
	
	$scope.bool = false;
	$scope.showDiv = function(){
		$scope.bool = true;
	}
	
	
	$scope.briefBio = "Sachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.";

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
>>>>>>> 4e0ad8e64b9fa193f279828f067d655e6cd6cc45

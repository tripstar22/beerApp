
// define controller
(function () {

angular
	.module('beerApp')
	.controller('DashCtrl', DashCtrl);

	function DashCtrl($scope, SpreadsheetFactory) {
	  	$scope.content = {};
	  	SpreadsheetFactory.getData().then( function (data) {
	    	$scope.content.beers = data;
	    	// $scope.predicate = '';
	    	// $scope.order = function (predicate) {
	     //  		$scope.predicate = predicate;
	    	// }
	  	});
	}
})();


// define module
var beerApp = angular.module('beerApp');

// define controller
beerApp.controller('beerController', function($scope, SpreadsheetFactory) {
	$scope.brews = [
		{
			name: 'Emergency Drinking Beer',
			brewery: 'Wild Heaven',
			percent: '4.00',
			style: 'ale',
			price: '$4.00',
			pour: '12 oz'
		},
		{
			name: 'Mudhoney',
			brewery: 'Burnt Hickory',
			percent: '6.80',
			style: 'brown',
			price: '$5.00',
			pour: '8 oz'
		},
		{
			name: 'Moonlight Drive',
			brewery: 'Southbound',
			percent: '8.75',
			style: 'coffee stout',
			price: '$6.00',
			pour: '8 oz'
		}
	];
});

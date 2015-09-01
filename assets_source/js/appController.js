
// define controller

// beerApp.controller('beerController', function($scope, SpreadsheetFactory) {
// 	$scope.brews = [
// 		{
// 			name: 'Emergency Drinking Beer',
// 			brewery: 'Wild Heaven',
// 			percent: '4.00',
// 			style: 'ale',
// 			price: '$4.00',
// 			pour: '12 oz'
// 		},
// 		{
// 			name: 'Mudhoney',
// 			brewery: 'Burnt Hickory',
// 			percent: '6.80',
// 			style: 'brown',
// 			price: '$5.00',
// 			pour: '8 oz'
// 		},
// 		{
// 			name: 'Moonlight Drive',
// 			brewery: 'Southbound',
// 			percent: '8.75',
// 			style: 'coffee stout',
// 			price: '$6.00',
// 			pour: '8 oz'
// 		}
// 	];
// });

(function () {

// angular
// 	.module('beerApp')
// 	.controller('appController', appController);

// 	function appController($scope, SpreadsheetFactory) {

// 		SpreadsheetFactory.getData().then( function (content) {

// 			$scope.content = content;
// 			console.log(content);
// 		});
// 	}






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





// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });

})();

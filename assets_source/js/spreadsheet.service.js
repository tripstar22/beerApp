(function () {

var beerApp = angular
  .module('beerApp')
  .factory('Content', SpreadsheetFactory)
  .controller('beerController', function($scope, SpreadsheetFactory) {
    $scope.brews = SpreadsheetFactory.getData();
  });

  function SpreadsheetFactory ($http, $q) {

    var key = '1dsnPQxSaoTjk0aIu5tsTACDU8uHg2gXUYxWGfKsBF4Y';
    var url = 'https://spreadsheets.google.com/feeds/list/' + key + '/od6/public/values?alt=json';
    var content = {};

    var spreadsheetFunctions = {
      getData: getData
    };

    return spreadsheetFunctions;

    function getData () {
      return $http.get(url)
        .success (function (response) {
          angular.forEach(response.feed.entry, function (key, value) {
            var contentItemName = key.title.$t;
            var contentItemData = key.gsx$value.$t;
            content[contentItemName] = contentItemData;
          });
        })
        .then (function (response) {
          return content;
        }, function (response) {

        });
    }
  }

})();



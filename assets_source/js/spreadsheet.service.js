(function () {

angular
  .module('beerApp')
  .factory('SpreadsheetFactory', SpreadsheetFactory);

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
            var contentItemName = key.content.$t;
            // var contentItemData = key.gsx$value.$t;
            content = contentItemName;

            // console.log(contentItemName);
            // console.log(contentItemData);
            console.log(content);
          });
        })
        .then (function (response) {
          return content;
        }, function (response) {

        });
    }
  }

})();



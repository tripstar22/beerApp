(function () {

angular
  .module('beerApp')
  .factory('SpreadsheetFactory', SpreadsheetFactory);

  function SpreadsheetFactory ($http, $q) {

    var key = '1dsnPQxSaoTjk0aIu5tsTACDU8uHg2gXUYxWGfKsBF4Y';
    var url = 'https://spreadsheets.google.com/feeds/list/' + key + '/od6/public/values?alt=json';
    var content = [];

    var spreadsheetFunctions = {
      getData: getData
    };

    return spreadsheetFunctions;

    function getData () {
      return $http.get(url)
        .success (function (response) {
          // console.log('response ----------------------- ');
          // console.log(response);
          angular.forEach(response.feed.entry, function (key, value) {
            var beer = {
              name: key.gsx$name.$t,
              brewery: key.gsx$brewery.$t,
              style: key.gsx$style.$t,
              percent: key.gsx$percent.$t,
              pour: key.gsx$pour.$t,
              price: key.gsx$price.$t
            };
            // console.log(beer);
            content.push(beer);
          });
        })
        .then (function (response) {
          return content;
        }, function (response) {

        });
    }
  }

})();

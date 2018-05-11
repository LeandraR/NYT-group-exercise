
var clearSearch = $('#clear').empty();
//var userSearch = $('#searchBox').text();
//var numberOfRecords = parseInt($('#records').text());
var numberOfRecords = 2;
var userSearch = "baseball";


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "e1e03d286e994b2c989fb0373e39a429",
    'q': userSearch,
  //  'begin_date': beginDate,
  //  'end_date': endDate
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
    console.log(result);
});
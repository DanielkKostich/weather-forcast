 var key='96229522a112929bafe99d9c89d7d638'
var api='api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid='
var city = document.querySelector('#dataList').value
var string = api + key + city


var firstcall ='http://api.openweathermap.org/geo/1.0/direct?q=belleville,us&limit=3&appid=' + key


document.getElementById('dataList').value()

var lat = ''
var lon =''

fetch(firstcall)
   .then(function (response) {
    return response.json();
 })

.then(function (data)  {
    console.log(data);
    document.getElementById('apiResponse').innerHTML = JSON.stringify(data);
  });
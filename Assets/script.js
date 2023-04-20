var apiKey = '96229522a112929bafe99d9c89d7d638'

async function getForcast(){
   
  
  var city = document.querySelector('#dataList').value
  //var weather = api + apiKey + city;
  var firstcall = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
   await fetch(firstcall)
  .then((response) => response.json())
  .then((data) => {
      if (data.length > 0 && data[0].lat && data[0].lon) {
          const lat = data[0].lat;
          const lon = data[0].lon;
          // use lat and lon in the next fetch call to get the weather forecast
          var api = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=" + apiKey
          fetch(api)
          .then((response) => response.json())
          .then((forecast) => {
            console.log(forecast);
            // process the forecast data and update the UI
          })
          .catch((error) => console.log('Error: Could not get weather forecast from API'));
      } else {
          console.log('Error: Could not get latitude and longitude from response');
      }
  })
  .catch((error) => console.log('Error: Could not get location from API'));}


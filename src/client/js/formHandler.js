const formHandler = (e) => {
  e.preventDefault();

  // User input
  let location = e.target.querySelector('#input-location').value;
  let date = e.target.querySelector('#input-date').value;
  let keys = null;
  let results = {};

  if (location !== "") {
    let days = Client.calculateDays(date)

    if (days) {
      if (days < 0) {
        alert("Please either enter today's date or a future date.")
      }
      else {
        // Fetch the api keys
        Client.getApiKeys()
        .then(data => {
          // Store the keys
          keys = data

          // Fetch the geoname data
          return Client.getGeonameData(keys.geonameKey, location)
        })
        .then(data => {
          let geonamesData = data.geonames[0];

          // Create a geonames object and store it
          results["geonames"] = {
            "country": geonamesData.countryName,
            "city": geonamesData.name,
            "lat": geonamesData.lat,
            "lon": geonamesData.lng
          }

          return results
        })
        .then(data => {
          // Get the weather data of the location
          return Client.getWeatherdata(data.geonames.lon, data.geonames.lat, days, keys.weatherbitKey)
        })
        .then(response => {
          let data = response.data[response.data.length - 1];

          // Create a weather object
          results["weather"] = {
            "date": date,
            "highTemp": data.high_temp,
            "lowTemp": data.low_temp,
            "desc": data.weather.description,
            "temp": data.temp
          }

          return results
        })
        .then(data => {
          // Get the image of the location
          return Client.getLocationImage(data.geonames.city, keys.pixabayKey)
        })
        .then(response => {
          // Create an image object
          results["image"] = {
            "url": response.hits[0].largeImageURL,
            "desc": results.geonames.city + " city"
          }

          return results
        })
        .then(data => {
          // Display the results
          Client.updateUi(data)
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
    else {
      alert("Invalid date format!")
    }
  } else {
    alert("Please enter the name of the city to travel")
  }
}

export { formHandler }

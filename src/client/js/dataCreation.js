const geonameBaseUrl = "http://api.geonames.org/searchJSON?username="
const geonameSuffixUrl = "&maxRows=1&style=LONG"
const weatherbitBaseUrl = "https://api.weatherbit.io/v2.0/forecast/daily?days="
const pixabayBaseUrl = "https://pixabay.com/api/?q="
const pixabaySuffixUrl = "+buildings&image_type=photo&orientation=horizontal&safesearch=true&category=travel"

// Fetchs the geoname given the location name and returns a promise object
const getGeonameData = async (username, location) => {
  const response = await fetch(`${geonameBaseUrl}${username}&q=${location}${geonameSuffixUrl}`);
  let data = response.json();
  return data
}

// Fetches the weather data given the longitude and latitude
const getWeatherdata = async (lon, lat, days, key) => {
  const response = await fetch(`${weatherbitBaseUrl}${days}&lat=${lat}&lon=${lon}&key=${key}`);
  let data = response.json()
  return data
}

// Fetches the image of the location provided the name
const getLocationImage = async (name, key) => {
  // Add plus sign if the name contains spaces
  name = name.split(" ")
  name = name.join("+")

  const response = await fetch(`${pixabayBaseUrl}${name}${pixabaySuffixUrl}&key=${key}`);
  let data = response.json()
  return data
}

// Creates an object containing all information required
const createData = async (keys, location, days) => {
  // Stores all of the information
  let results = {}

  getGeonameData(keys.geonameUsername, location)
  .then(data => {
    let geonamesData = data.geonames[0];

    // Create a geonames object and store it
    results["geonames"] = {
      "country": geonamesData.countryName,
      "city": geonamesData.name,
      "lat": geonamesData.lat,
      "lon": geonamesData.lng
    }
    console.log(results);

    return results
  })
  // .then(data => {
  //   return getWeatherdata(data.geonames.lon, data.geonames.lat, days, keys.weatherbitKey)
  // })
  // .then (response => {
  //   let data = response.data[response.data.length - 1];
  //
  //   // Create a weather object
  //   results["weather"] = {
  //     "highTemp": data.high_temp,
  //     "lowTemp": data.low_temp,
  //     "desc": data.weather.description,
  //     "temp": data.temp
  //   }
  //
  //   return results
  // })
  // .then(data => {
  //   return getLocationImage(data.geonames.city, keys.pixabayKey)
  // })
  // .then(response => {
  //   results["image"] = {
  //     "url": response.hits[0].pageURL,
  //     "desc": results.geonames.city + " city"
  //   }
  //
  //   return results
  // })
  .catch(error => {
    console.log(error);
  })
}

export {
  createData
}

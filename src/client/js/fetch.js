const geonameBaseUrl = 'http://api.geonames.org/searchJSON?username='
const geonameSuffixUrl = '&maxRows=1&style=LONG'
const weatherbitBaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?days='
const pixabayBaseUrl = 'https://pixabay.com/api/?q='
const pixabaySuffixUrl = '+buildings&image_type=photo&orientation=horizontal&safesearch=true&category=travel'

// Fetchs the geoname given the location name and returns a promise object
const getGeonameData = async (username, location) => {
  const response = await fetch(`${geonameBaseUrl}${username}&q=${location}${geonameSuffixUrl}`)
  const data = response.json()
  return data
}

// Fetches the weather data given the longitude and latitude
const getWeatherdata = async (lon, lat, days, key) => {
  const response = await fetch(`${weatherbitBaseUrl}${days}&lat=${lat}&lon=${lon}&key=${key}`)
  const data = response.json()
  return data
}

// Fetches the api keys
const getApiKeys = async () => {
  const response = await fetch('http://localhost:8081/getKeys')
  const data = response.json()
  return data
}

// Fetches the travel data
const getAllTrips = async () => {
  const response = await fetch('http://localhost:8081/allTrips')
  const data = response.json()
  return data
}

// Fetches the image of the location provided the name
const getLocationImage = async (name, key) => {
  // Add plus sign if the name contains spaces
  name = name.split(' ')
  name = name.join('+')

  const response = await fetch(`${pixabayBaseUrl}${name}${pixabaySuffixUrl}&key=${key}`)
  const data = response.json()
  return data
}

export {
  getApiKeys,
  getGeonameData,
  getWeatherdata,
  getLocationImage,
  getAllTrips
}

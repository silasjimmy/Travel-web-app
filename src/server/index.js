const dotenv = require('dotenv');
dotenv.config();

let trips = []

// Environment variables
const env = {
  'geonameUsername': process.env.GEONAME_USERNAME,
  'weatherbitKey': process.env.WEATHERBIT_KEY,
  'pixabayKey': process.env.PIXABAY_KEY
}

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const axios = require('axios')

// Create the express app
const app = express()

// Use CORS
app.use(cors())

// Use json
app.use(bodyParser.json())

// Use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

// Specify which static files to use
app.use(express.static('dist'))

/* Routes */
// Home route
app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.get('/getEnv', (request, response) => {
  response.send(env)
})

app.get('/allTrips', (request, response) => {
  response.send(trips)
})

app.post('/addTrip', (request, response) => {
  console.log(request);
})

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081...')
})

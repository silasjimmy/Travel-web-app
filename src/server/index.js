var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    "success": "OK"
}

// Create app
const app = express()

// Use CORS
app.use(cors())

// Use json
app.use(bodyParser.json())

// Use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

// Use files in the distribution folder
app.use(express.static('dist'))

/* Endpoints */
// Home
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Testing
app.get('/test', function (req, res) {
    res.send(json);
})

// Designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Application listening on port 8081...')
})

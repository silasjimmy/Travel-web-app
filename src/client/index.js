// Import external functions
import { createTripCard } from './js/createTrip'
import { formHandler } from './js/formHandler'
import { updateUi } from './js/updateUi'
import {
  getApiKeys,
  getGeonameData,
  getWeatherdata,
  getLocationImage,
  getAllTrips
} from './js/fetch'

import {
  parseDate,
  calculateDays,
  formatStringDate
} from './js/date'

// Import scss files
import './sass/defaults.scss'
import './sass/form.scss'
import './sass/results.scss'
import './sass/saved.scss'

document.addEventListener('DOMContentLoaded', () => {
  Client.getAllTrips()
    .then(data => {
      for (const obj of data) {
        Client.createTripCard(obj)
      }
    })
    .catch(error => {
      console.log(error)
    })
})

// Export the function
export {
  createTripCard,
  formHandler,
  updateUi,
  getApiKeys,
  getGeonameData,
  getWeatherdata,
  getLocationImage,
  getAllTrips,
  calculateDays,
  formatStringDate,
  parseDate
}

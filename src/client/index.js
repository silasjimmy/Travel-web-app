// Import external functions
import { createTripCard } from './js/createTrip'
import { formHandler } from './js/formHandler'
import { updateUi } from './js/updateUi'
import { getApiKeys } from './js/fetch'
import { getGeonameData } from './js/fetch'
import { getWeatherdata } from './js/fetch'
import { getLocationImage } from './js/fetch'
import { getAllTrips } from './js/fetch'
import { calculateDays } from './js/calculateDays'
import { formatStringDate } from './js/formatDate'

// Import scss files
import "./sass/defaults.scss"
import "./sass/form.scss"
import "./sass/results.scss"
import "./sass/saved.scss"

document.addEventListener('DOMContentLoaded', () => {
  Client.getAllTrips()
  .then(data => {
    for (let obj of data) {
      Client.createTripCard(obj);
    }
  })
  .catch(error => {
    console.log(error);
  })
});

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
  formatStringDate
}

// Import external functions
import { createTripCard } from './js/createTrip'
import { formHandler } from './js/formHandler'
import { displayResults } from './js/results'
import { updateUi } from './js/updateUi'
import { createData } from './js/dataCreation'

// Import scss files
import "./sass/defaults.scss"
import "./sass/form.scss"
import "./sass/results.scss"
import "./sass/saved.scss"

// Export the imported function
export {
  createTripCard,
  formHandler,
  updateUi,
  displayResults,
  createData
}

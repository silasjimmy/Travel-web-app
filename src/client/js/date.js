const moment = require('moment')

const parseDate = (date) => {
  const isValid = Date.parse(date)
  if (isNaN(isValid)) {
    return false
  }

  return true
}

// Calculates the number of days in between the two dates
const calculateDays = (date) => {
  try {
    const dateObj = Date.parse(new Date(date))
    const today = Date.now()
    const secs = dateObj - today
    const days = Math.floor(secs / 86400000)

    return days + 1
  } catch (e) {
    return e
  }
}

const formatStringDate = (date) => {
  // const day = moment(date, 'MM-DD-YYYY')
  // const dateString = day.toDate()
  // return dateString.toDateString()
  return moment(date).format('dddd, MMMM Do YYYY')
}

export {
  parseDate,
  calculateDays,
  formatStringDate
}

const moment = require('moment')

const parseDate = (date) => {
  const day = moment(date, 'MM DD YYYY')

  if (day.isValid()) {
    return true
  }

  return false
}

// Calculates the number of days in between the two dates
const calculateDays = (date) => {
  try {
    const dateObj = Date.parse(new Date(date))
    const today = Date.now()
    const secs = dateObj - today
    return Math.ceil(secs / 86400000)
  } catch (e) {
    return e
  }
}

const formatStringDate = (date) => {
  const day = moment(date, 'MM-DD-YYYY')
  const dateString = day.toDate()
  return dateString.toDateString()
}

export {
  parseDate,
  calculateDays,
  formatStringDate
}

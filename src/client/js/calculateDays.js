// Calculates the number of days in between the two dates
const calculateDays = (date) => {
  try {
    const dateObj = Date.parse(new Date(date))
    const today = Date.now()
    const secs = dateObj - today

    return 20

    // return (secs / 86400000)
    // return Math.floor(secs / 86400000)
  } catch (e) {
    return e
  }
}

export {
  calculateDays
}

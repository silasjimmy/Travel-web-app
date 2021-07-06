// Calculates the number of days in between the two dates
const calculateDays = (date) => {
  try {
    let dateObj = Date.parse(new Date(date))
    let today = Date.now()
    let secs = dateObj - today

    return Math.ceil(secs / 86400000);
  } catch (e) {
    return e
  }
}

export {
  calculateDays
}

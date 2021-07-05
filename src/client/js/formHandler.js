const formHandler = (e) => {
  e.preventDefault()

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

  let location = e.target.querySelector('#input-location').value;
  let date = e.target.querySelector('#input-date').value;

  let days = calculateDays(date)
  if (days) {
    if (days < 0) {
      alert("Please either enter today's date or a future date.")
    }
    else {
      Client.displayResults(location, days)
    }
  }
  else {
    alert("Invalid date format!")
  }
}

export { formHandler }

const updateUi = (content) => {
  // Check if there is any existing results on display and remove
  if (document.querySelector("#results-card")) {
    document.querySelector("#results-card").remove();
  }

  // Test to see if the browser supports the HTML template element.
  if ('content' in document.createElement('template')) {
    // The parent container
    let resultsContainer = document.querySelector(".results__section");

    // The results card
    let resultsCard = document.createElement("div");
    resultsCard.setAttribute("id", "results-card");

    // Get the template and clone the child node
    let template = document.querySelector('#results');
    let clone = template.content.cloneNode(true);

    clone.querySelector("img").src = content.image.url;
    clone.querySelector("img").alt = content.image.desc;
    clone.querySelector("#city").innerHTML = `${content.geonames.city}, ${content.geonames.country}`;
    clone.querySelector("#date").innerHTML = Client.formatStringDate(content.weather.date);
    clone.querySelector("#save-trip").addEventListener('click', e => saveTrip(e))
    clone.querySelector("#remove-trip").addEventListener('click', e => removeTrip(e))
    clone.querySelector("#place").innerHTML =
        `My trip to ${content.geonames.city}, ${content.geonames.country}`
    clone.querySelector("#days").innerHTML = Client.calculateDays(content.weather.date)
    clone.querySelector("#desc-1").innerHTML = content.weather.desc;
    clone.querySelector("#desc-2").innerHTML = `${content.weather.temp}<sup>&deg</sup>`;
    clone.querySelector("#desc-3").innerHTML =
        `High temp: ${content.weather.highTemp}, Low temp: ${content.weather.lowTemp}`


    resultsCard.appendChild(clone);
    resultsContainer.appendChild(resultsCard);
  } else {
    // Tell the user his/her browser does not support templates
    alert("Seems your browser does not support html templates")
  }
}

// Saves the details of a trip
const saveTrip = (e) => {
  e.preventDefault();

  let parent = e.target.parentElement.parentElement;
  const tripDetails = {
    "imageUrl": parent.querySelector("img").src,
    "imageDesc": parent.querySelector("img").alt,
    "place": parent.querySelector("#city").innerText,
    "date": parent.querySelector("#date").innerText
  }

  // Save the trip details
  postTravelData("http://127.0.0.1:8081/addTrip", tripDetails)

  // Create a trip card in the saved section
  Client.createTripCard(tripDetails);

  // Remove the results on display
  parent.remove();
}

// Removes the details of a trip
const removeTrip = (e) => {
  e.preventDefault();

  let parent = e.target.parentElement.parentElement;
  parent.remove();
}

// Save the travel details in the server
const postTravelData = async(url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export {
  updateUi
}

const updateUi = (content) => {
  console.log(content);
  // Test to see if the browser supports the HTML template element.
  if ('content' in document.createElement('template')) {
    // let resultsContainer = document.querySelector(".results__section");
    //
    // // Get the template and clone the child node
    // let template = document.querySelector('#results');
    // let clone = template.content.cloneNode(true);
    //
    // clone.querySelector(".plan > #city").innerHTML = content.geonames.country;
    //
    // resultsContainer.appendChild(clone);
  } else {
    // Tell the user his/her browser does not support templates
    alert("Seems your browser does not support html templates")
  }
}

export {
  updateUi
}

const displayResults = (contentToInsert) => {
  // Test to see if the browser supports the HTML template element.
  if ('content' in document.createElement('template')) {
    // Get the template
    var template = document.querySelector('#results');

    // Do the operations
    return template.content.cloneNode(true);

    // Append the node to the container
    // Done after creating the results div
    // tbody.appendChild(clone);
  } else {
    // Tell the user his/her browser does not support templates
    alert("Seems your browser does not support html templates")
  }
}

export { displayResults }

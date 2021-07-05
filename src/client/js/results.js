const displayResults = (location, days) => {
  fetch("http://localhost:8081/getEnv")
  .then(envData => {
    let keys = envData.json();
    return keys
  })
  .then(apiKeys => {
    console.log(Client.createData(apiKeys, location, days));
    // return Client.createData(apiKeys, location, days)
  })
  .then(data => {
    Client.updateUi(data);
  })
  .catch(error => {
    console.log(error);
  })
}

export { displayResults }

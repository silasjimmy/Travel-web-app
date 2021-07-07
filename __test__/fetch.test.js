// To prevent regenerator runtime reference error
import regeneratorRuntime from "regenerator-runtime"

import {
  getApiKeys,
  getGeonameData,
  getWeatherdata,
  getLocationImage,
  getAllTrips
} from '../src/client/js/fetch'

// Define the test
describe("Testing the API fetch functionality", () => {
  test("Testing the getApiKeys() function", () => {
    expect(getApiKeys).toBeDefined();
  });
  test("Testing the getGeonameData() function", () => {
    expect(getGeonameData).toBeDefined();
  });
  test("Testing the getWeatherdata() function", () => {
    expect(getWeatherdata).toBeDefined();
  });
  test("Testing the getLocationImage() function", () => {
    expect(getLocationImage).toBeDefined();
  });
  test("Testing the getAllTrips() function", () => {
    expect(getAllTrips).toBeDefined();
  });
});

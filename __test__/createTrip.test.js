import { createTripCard } from '../src/client/js/createTrip'

// Define the test
describe("Testing the trip card creation functionality", () => {
  test("Testing the createTripCard() function", () => {
    expect(createTripCard).toBeDefined();
  });
});

// To prevent regenerator runtime reference error
import regeneratorRuntime from "regenerator-runtime"

import { updateUi } from '../src/client/js/updateUi'

// Define the test
describe("Testing the UI update functionality", () => {
  test("Testing the updateUi() function", () => {
    expect(updateUi).toBeDefined();
  });
});

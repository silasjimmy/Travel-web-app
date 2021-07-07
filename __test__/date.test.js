import {
  parseDate,
  calculateDays,
  formatStringDate
} from '../src/client/js/date'

// Define the test
describe("Testing the date manipulation functionality", () => {
  test("Testing the parseDate() function", () => {
    expect(parseDate).toBeDefined();
  });

  test("Testing for a valid date", () => {
    expect(parseDate('07/07/2021')).toBe(true);
  });

  test("Testing for an invalid date", () => {
    expect(parseDate('07/2021')).toBe(false);
  });

  test("Testing the calculateDays() function", () => {
    expect(calculateDays).toBeDefined();
  });

  test("Testing the output type of the calculateDays() function", () => {
    expect(typeof(calculateDays('08/07/2021'))).toBe('number');
  });

  test("Testing the formatStringDate() function", () => {
    expect(formatStringDate).toBeDefined();
  });

  test("Testing the output type of the formatStringDate() function", () => {
    expect(typeof(formatStringDate('08/07/2021'))).toBe('string');
  });
});

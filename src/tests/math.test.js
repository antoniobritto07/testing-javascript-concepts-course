import { it, expect, describe } from "vitest"; //import { tet } would means the same thing
import { add } from "../math.js";

describe("add", () => {
  it("should summarize all number values in an array", () => {
    // Arrange step
    const array = [1, 2, 3];

    // Act step
    const result = add(array);

    // Assert step
    const expectedResult = array.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if a least one invalid number is provided", () => {
    // Arrange step
    const array = [1, 2, "invalidNumber"];

    // Act step
    const result = add(array);

    // Assert step
    expect(isNaN(result)).toBeTruthy();
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };

    expect(resultFn).toThrow();
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const number1 = 1;
    const number2 = 2;

    const resultFn = () => {
      add(number1, number2);
    };

    expect(resultFn).toThrow(/is not iterable/);
  });
});

// Vitest is capable to provide us writing testing cases inside the js/ts files
// that have the code which should be tested itself.
// This functionality is called as In-source testing, and Jest doesn't support it.

// npm run test:watch keeps the terminal in a test run mode being very useful to debug.

import { it, expect, describe } from "vitest"; //import { tet } would means the same thing
import {
  transformToNumber,
  validateAndManageNumberInputs,
} from "../util/numbers";

describe("transformToNumber()", () => {
  it("should keep a number type as a number", () => {
    // Arrange step
    const input = 2;

    // Act step
    const result = transformToNumber(input);

    // Assert step
    expect(result).toBeTypeOf("number");
  });

  it("should yield NaN if the receiver parameter is a non-transformable value", () => {
    // Arrange step
    const input = "a";
    const input2 = {};

    // Act step
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    // Assert step
    expect(result).toBeNaN(result);
    expect(result).toBeNaN(result2);
  });

  it("should yield a number if a nummer is provided, even though in a string format", () => {
    // Arrange step
    const input = "12";

    // Act step
    const result = transformToNumber(input);

    // Assert step
    expect(result).toBeTypeOf("number");
  });
});

// integration test is more used for functions that depends
// on the results of other functions.
describe("validateAndManageNumberInputs()", () => {
  it("should return an array or number values if a arrayof string number values is provided", () => {
    const numbers = ["1", "2"];

    const cleanedNumbers = validateAndManageNumberInputs(numbers);

    // expect(cleanedNumbers[0]).toBe(1);
    // expect(cleanedNumbers[1]).toBe(2);
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numbers = ["a", "3"];

    //we should wrap the function in a empty function to test what it's going to throw
    const cleanedNumbers = () => validateAndManageNumberInputs(numbers);

    expect(cleanedNumbers).toThrow();
  });
});

// - Typically we'll have more unit tests instead of integration ones.
// - We must find a balance between those two types of tests.
// - Basically we don't need to create a standalone function for each single behavior,
// to try forcing it to be unit tested.
// The sequence in terms of quantity might be:
// 1 - Unit tests. 2 - Integration tests. 3 - End to end tests.

// ================================================================

// The difference between primitive values and
// reference values lies in how they’re stored and handled in memory:

// Primitive Values:
// - Stored directly within the variable.
// - Include types like numbers, strings, booleans, null, undefined, and Symbol.
// - When assigned or passed to another variable, they’re copied.
// This means the new variable holds an independent copy of the value.
// Primitive values are stored in the stack, whereas reference ones are stored in the heap.

// Reference Values:
// - Stored as a reference to a memory location where the actual data resides.
// - Include complex types like objects and arrays.
// - When assigned or passed to another variable, the new variable points to
// the same memory location. Modifying a referenced value in one variable
// affects the other.

// ================================================================

// toEqual bypass the issue related to the reference values comparison

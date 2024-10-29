import { it, expect, describe } from "vitest";
import { defineResultText } from "../output.js";

describe("defineResultText()", () => {
  it("should return a string, no matter which value is passed in", () => {
    const input1 = 1;
    const input2 = "invalid";
    const input3 = false;

    const result1 = defineResultText(input1);
    const result2 = defineResultText(input2);
    const result3 = defineResultText(input3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided as a result", () => {
    const result = 5;

    const resultText = defineResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = "no-calc";

    const resultText = defineResultText(result);

    expect(resultText).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = defineResultText(result);

    expect(resultText).toContain("Invalid");
  });
});

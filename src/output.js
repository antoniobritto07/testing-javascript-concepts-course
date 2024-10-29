import { add } from "./math.js";

export const defineResultText = (result) => {
  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  return resultText;
};

export const outputResult = (result) => {
  const output = document.getElementById("result");

  output.textContent = result;
};

export const defineResult = (numbers) => {
  return add(numbers).toString();
};

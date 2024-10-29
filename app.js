import { extractNumbers } from "./src/parser.js";
import { defineResult, defineResultText, outputResult } from "./src/output.js";
import { validateAndManageNumberInputs } from "./src/util/numbers.js";

const form = document.querySelector("#formdata");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formdata");
  form.addEventListener("submit", formSubmitHandler);
});

function formSubmitHandler(event) {
  event.preventDefault(); // Impede o envio do formulário para o servidor

  const numberInputs = extractNumbers(form);
  const numbers = validateAndManageNumberInputs(numberInputs);

  const result = defineResult(numbers);
  const resultText = defineResultText(result);

  outputResult(resultText); // Exibe o resultado no frontend
}

// Rules regarding tests - Good Practises.
// 1. We should only take into account testing our own application
// and not external code, third party application or anything like that.
// We must focus on the code or the things that we have access to contribute.

// 2. We should follow that AAA rule (Arrange - Act - Arrange)
// 3. Only test one thing (one feature/behavior) at a time
// 4. We must focus on the essence of a test when arranging
// 5. Keep your number of assertions ("expects") low

// Tests kinda force us to write better code, given that we must have the functions
// being granular. Having functions doing only one thing once, it's good for us both
// the code itself and the tests scenarios.

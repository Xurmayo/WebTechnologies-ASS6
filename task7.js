// ============================
// Task 7 – Calculator
// Author: Amangeldi Alisher (SE-2432)
// ============================

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultBox = document.getElementById("result");

  // Handle invalid input
  if (isNaN(num1) || isNaN(num2)) {
    resultBox.textContent = "Please enter valid numbers!";
    resultBox.style.color = "gray";
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultBox.textContent = "Cannot divide by zero!";
        resultBox.style.color = "gray";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Error";
  }

  // Display result
  resultBox.textContent = `= ${result}`;
  resultBox.style.color = "#8B0000";
}

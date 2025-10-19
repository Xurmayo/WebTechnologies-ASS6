// ============================
// Task 6 – Keyboard Events
// Author: Amangeldi Alisher (SE-2432)
// ============================

// Get elements
const input = document.getElementById("liveInput");
const display = document.getElementById("displayText");

// Listen for keyup event
input.addEventListener("keyup", () => {
  const text = input.value.trim();

  if (text === "") {
    display.textContent = "Nothing yet...";
    display.style.color = "gray";
  } else {
    display.textContent = text;
    display.style.color = "#8B0000"; // dark red
  }
});

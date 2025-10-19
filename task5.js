// ============================
// Task 5 – Mouse Events
// Author: Amangeldi Alisher (SE-2432)
// ============================

// Get the box element
const hoverBox = document.getElementById("hoverBox");

// Store the original color
const originalColor = "#8B0000";

// Mouse over event
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#FFD700"; // gold
  hoverBox.style.color = "#000";
  hoverBox.textContent = "🌟 Mouse is over the box!";
});

// Mouse out event
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = originalColor;
  hoverBox.style.color = "#fff";
  hoverBox.textContent = "Move your mouse over this box!";
});

// ============================
// Task 3 – Changing Styles
// Author: Amangeldi Alisher (SE-2432)
// ============================

// Change the background color randomly
function changeBackground() {
  const box = document.getElementById("colorBox");
  const colors = ["#FFB6C1", "#FFD700", "#90EE90", "#87CEFA", "#FFA07A", "#E6E6FA"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
}

// Change the font size of the text inside the box
function changeFont() {
  const text = document.getElementById("boxText");
  const sizes = ["1rem", "1.5rem", "2rem", "2.5rem"];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  text.style.fontSize = randomSize;
  text.style.fontWeight = "600";
  text.style.color = "#8B0000";
}

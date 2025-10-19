// ============================
// Task 2 – Changing Content
// Author: Amangeldi Alisher (SE-2432)
// ============================

// Function to change paragraph text
function changeText() {
  // Get paragraph element
  const paragraph = document.getElementById("myParagraph");

  // Update its text content
  paragraph.textContent = "✨ The paragraph text has been successfully changed with JavaScript!";
  
  // Optional: style change for clarity
  paragraph.style.color = "#8B0000";
  paragraph.style.fontWeight = "600";
}

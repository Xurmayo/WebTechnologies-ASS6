// ============================
// Task 4 – Creating & Removing Elements
// Author: Amangeldi Alisher (SE-2432)
// ============================

let count = 2; // initial list already has two items

function addItem() {
  const list = document.getElementById("itemList");
  count++;
  const newItem = document.createElement("li");
  newItem.className = "list-group-item";
  newItem.textContent = `Item ${count}`;
  list.appendChild(newItem);
}

function removeItem() {
  const list = document.getElementById("itemList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    count--;
  } else {
    alert("No items left to remove!");
  }
}

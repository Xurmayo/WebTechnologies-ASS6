// ============================
// Task 8 – To-Do App
// Author: Amangeldi Alisher (SE-2432)
// ============================

// In-memory store
let tasks = []; // each task: { id, title, desc, done }

const form = document.getElementById("todoForm");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const listEl = document.getElementById("todoList");
const emptyEl = document.getElementById("emptyState");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple required validation
  const title = titleEl.value.trim();
  const desc = descEl.value.trim();
  if (!title || !desc) {
    // show native browser bubbles
    if (!title) titleEl.reportValidity();
    else descEl.reportValidity();
    return;
  }

  const task = {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    title,
    desc,
    done: false
  };
  tasks.push(task);
  form.reset();
  render();
});

// Toggle "done"
function toggleDone(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
  render();
}

// Delete a task
function removeTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  render();
}

// Build one list item
function taskItemTemplate(task) {
  const doneClassesTitle = task.done ? "text-decoration-line-through text-muted" : "";
  const doneClassesCard  = task.done ? "opacity-75" : "";

  return `
    <li class="mb-3">
      <div class="border rounded-3 p-3 shadow-sm bg-white ${doneClassesCard}">
        <div class="d-flex justify-content-between align-items-start gap-3">
          <div class="flex-grow-1">
            <div class="fw-semibold ${doneClassesTitle} todo-title">${escapeHtml(task.title)}</div>
            <div class="small mt-1 ${task.done ? 'text-muted' : ''}">
              ${escapeHtml(task.desc)}
            </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm ${task.done ? 'btn-success' : 'btn-outline-success'}"
                    title="Mark complete"
                    onclick="toggleDone('${task.id}')">
              <i class="bi bi-check-lg"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger"
                    title="Delete task"
                    onclick="removeTask('${task.id}')">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  `;
}

// Escape user text to avoid HTML injection
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, s => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[s]));
}

// Render list
function render() {
  listEl.innerHTML = tasks.map(taskItemTemplate).join("");
  emptyEl.style.display = tasks.length ? "none" : "block";
}

// Initial render
render();

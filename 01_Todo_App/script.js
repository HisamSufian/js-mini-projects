const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerText = taskText;

  // Mark complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent triggering complete toggle
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});

// Get references to HTML elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const taskText = todoInput.value; // Get the input value
  if (taskText === "") return; // Do nothing if input is empty

  // Create a new list item
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Delete</button>
  `;

  // Add event listener to toggle completion
  listItem.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      listItem.classList.toggle("completed");
    }
  });

  // Add event listener to delete the task
  const deleteBtn = listItem.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  // Add the new task to the list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = "";
}

// Event listener for the form submission
todoForm.addEventListener("submit", addTask);

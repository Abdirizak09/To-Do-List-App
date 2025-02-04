# Project 4: To-Do List App

## Goal
Build a simple and user-friendly To-Do List App where users can:
- Add new tasks.
- Mark tasks as completed.
- Delete tasks.

## Features
- Dynamic task management (add, complete, delete).
- Responsive and visually appealing UI.
- Easy-to-use interface.

## Project Setup
1. Create a new folder for the project (e.g., `todo-list-app`).
2. Inside the folder, create the following files:
   - `index.html`
   - `style.css`
   - `script.js`

## File Structure
```
todo-list-app/
├── index.html
├── style.css
└── script.js
```

## Step 1: Writing the HTML
The `index.html` file contains the structure of the app:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <form id="todo-form">
      <input type="text" id="todo-input" placeholder="Enter a new task..." required>
      <button type="submit">Add Task</button>
    </form>
    <ul id="todo-list">
      <!-- Tasks will be dynamically added here -->
    </ul>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## Step 2: Writing the CSS
The `style.css` file provides styling for the app:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.todo-container {
  background: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 0.5rem;
}

button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

li.completed {
  text-decoration: line-through;
  color: #888;
}

button.delete {
  background: #dc3545;
  border: none;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  cursor: pointer;
}

button.delete:hover {
  background: #a71d2a;
}
```

## Step 3: Writing the JavaScript
The `script.js` file handles the functionality of the app:

```javascript
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
```

## How to Run the App
1. Open the `index.html` file in your browser.
2. Start adding tasks, marking them as completed, or deleting them as needed.

## Future Enhancements
- Add local storage to save tasks between sessions.
- Add a filter to view completed or pending tasks.
- Improve responsiveness for smaller screens.

## License
This project is open-source and available under the [MIT License](LICENSE).

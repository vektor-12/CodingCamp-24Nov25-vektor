/// Temporary storage for todo items
let todos = [];


function validateForm() {
/// Get input values
    const todo = document.getElementById('todo-input').value;
    const date = document.getElementById('todo-date').value;

//validate input todo and date
   if (todo === '' || date === '') {
         alert('Please fill in both the todo item and due date.');
   } else {
        addTodo(todo, date);
        // Clear input fields after adding
        document.getElementById('todo-input').value = '';
        document.getElementById('todo-date').value = '';
   }
}

/// Function to add a new todo item
function addTodo(todo, date) {
    // Create a new todo item object
    const todoItem ={
        task: todo,
        date: date,
    }

    /// Add the new todo item to the todos array
    todos.push(todoItem);
    renderTodos();
}
/// fungtion to render the todo list
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    
    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

// Function to clear all todos
function clearTodos() {
    todos = [];
    renderTodos(); 
}

// Function to filter todo items by date 
function filterTodos() {
    const filterDate = prompt("Enter date to filter todos (YYYY-MM-DD):");
    if (filterDate) {
        const filteredTodos = todos.filter(todo => todo.date === filterDate);
        const todoList = document.getElementById('todo-list');

        // Clear existing list
        todoList.innerHTML = '';

        // Render filtered todo items
        filteredTodos.forEach((todo, _) => {
            todoList.innerHTML += `
            <li>
                <p class="text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
                <hr />
            </li>`;
        });
    }
}   

// Initial render
renderTodos();

// Function to filter todo items by date 
function filterTodos() {
    const filterDate = prompt("Enter date to filter todos (YYYY-MM-DD):");
    if (filterDate) {
        const filteredTodos = todos.filter(todo => todo.date === filterDate);
        const todoList = document.getElementById('todo-list');
        // Clear existing list
        todoList.innerHTML = '';

        // Render filtered todo items
        filteredTodos.forEach((todo, _) => {
            todoList.innerHTML += `
            <li>
                <p class="text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
                <hr />
            </li>`;
        });
    }
}        


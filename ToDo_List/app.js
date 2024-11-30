// Getting elements from the DOM
let form = document.querySelector('form');
let input = document.querySelector('input');
let todos = document.querySelector('.todos');

function getTodo(value){
    // Creating a new Elements
    let todo = document.createElement('div');
    let todoText = document.createElement('span');

    // Setting values & styles
    todoText.innerHTML = value;

    // Append our element to the DOM
    todo.appendChild(todoText);

    let closeEl = document.createElement('span');
    closeEl.innerHTML = "&times;";
    closeEl.classList.add('delete');

    // Attach Events

    closeEl.addEventListener('click', function(e){
        e.preventDefault();
        todos.remove(todo);
    })

    todo.appendChild(closeEl);
    todo.classList.add('todo');
    return todo;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(input.value)

    let value  = input.value;
    if(!value.trim()) return;
    todos.appendChild(getTodo(value))
    input.value = "";
})
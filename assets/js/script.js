const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo__list-items");

todoInput.addEventListener("keypress", (e) => {
  e.key === "Enter" && addTodo();
});

function addTodo(e) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__list-items-item");
  const taskDiv = document.createElement("div");
  const deleteDiv = document.createElement("div");
  taskDiv.classList.add("task", "flex");
  deleteDiv.classList.add("delete");
  todoDiv.append(taskDiv, deleteDiv)
  
}

// addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {

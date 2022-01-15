const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo__list-items");
const bottomInfo = document.querySelector(".todo__list-info");
const floatingText = document.querySelector(".floating-text");
const clearCompletedTasks = document.querySelector(".clear-completed");
const allItems = document.querySelector(".all");
const activeItems = document.querySelector(".active");
const completedItems = document.querySelector(".completed");
const themeChanger = document.querySelector(".theme-changer");
const themeChangerIcon = document.querySelector(".theme-changer-img");
const body = document.querySelector("body");
const bgImg = document.querySelector(".background-img");

todoInput.addEventListener("keypress", (e) => {
  e.key === "Enter" && addTodo();
});

function addTodo(e) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__list-items-item", "flex");
  const taskDiv = document.createElement("div");
  const deleteDiv = document.createElement("div");
  taskDiv.classList.add("task", "flex");
  deleteDiv.classList.add("delete");
  todoDiv.append(taskDiv, deleteDiv);

  const taskDivButton = document.createElement("button");
  taskDivButton.classList.add("task-button");
  const taskDivButtonImage = document.createElement("img");
  taskDivButtonImage.classList.add("image-check-button-default");

  const taskDivLi = document.createElement("li");

  [todoDiv, taskDivButton, taskDivLi].forEach((element) => {
    element.addEventListener("click", () => {
      taskDivButton.appendChild(taskDivButtonImage);
      taskDivButtonImage.src = "./assets/images/icon-check.svg";
      taskDivButtonImage.alt = "task completed";
      taskDivButton.classList.add("pointer-events");
      taskDivButtonImage.classList.toggle("gradient-bg-btn");

      taskDivButton.classList.toggle("task-button");
      taskDivButton.classList.toggle("check-button");
      taskDivButtonImage.classList.toggle("image-check-button-default");
      taskDivButtonImage.classList.toggle("image-check-button");
      todoDiv.classList.toggle("todo__list-items-item");
      todoDiv.classList.toggle("todo-div");

      if (taskDivButton.childNodes.length > 1) {
        taskDivButton.removeChild(taskDivButtonImage);
      }

      taskDivLi.classList.toggle("strike-through");
      if (taskDivLi.classList.contains("strike-through")) {
        taskDivLi.style.color = "hsl(236, 9%, 61%)";
      } else {
        taskDivLi.style.color = "hsl(235, 19%, 35%)";
      }
    });
  });

  if (todoInput.value.length === 0) {
    todoDiv.removeChild(taskDivLi);
  }
  taskDivLi.innerText = todoInput.value;
  todoInput.value = "";

  const deleteDivButton = document.createElement("button");
  const deleteDivButtonImage = document.createElement("img");
  taskDiv.append(taskDivButton, taskDivLi);
  if (taskDiv.hasChildNodes()) {
    bottomInfo.style.display = "grid";
    floatingText.style.display = "none";
  }

  deleteDiv.appendChild(deleteDivButton);
  deleteDivButton.appendChild(deleteDivButtonImage);

  deleteDivButtonImage.src = "./assets/images/icon-delete.svg";
  deleteDivButtonImage.alt = "delete task";

  todoList.appendChild(todoDiv);

  deleteDivButton.addEventListener("click", () => {
    todoDiv.remove();
    if (!todoList.hasChildNodes()) {
      bottomInfo.style.display = "none";
      floatingText.style.display = "flex";
    }
  });

  clearCompletedTasks.addEventListener("click", () => {
    if (taskDivLi.classList.contains("strike-through")) {
      todoDiv.remove();
    }
  });
}

themeChanger.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeChangerIcon.src = "./assets/images/icon-sun.svg";
    bgImg.src = "./assets/images/bg-mobile-dark.jpg";
    bgImg.srcset =
      "./assets/images/bg-mobile-dark.jpg 500w, ./assets/images/bg-desktop-dark.jpg 1920w";
  } else {
    themeChangerIcon.src = "./assets/images/icon-moon.svg";
    bgImg.src = "./assets/images/bg-mobile-light.jpg";
    bgImg.srcset =
      "./assets/images/bg-mobile-light.jpg 500w, ./assets/images/bg-desktop-light.jpg 1920w";
  }
});

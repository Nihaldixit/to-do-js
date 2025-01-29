let task = document.getElementById("taskInput");
let taskContainer = document.getElementById("taskContainer");
function createTaskDiv() {
  let taskDiv = document.createElement("div");
  taskDiv.innerHTML = `
    <span>${task.value}</span>
    <button id="deleteButton" onclick="deleteTask(this)">Remove</button>`;
  taskContainer.appendChild(taskDiv);
}
function addTask() {
  if (task.value != "") {
    createTaskDiv();
  }
  task.value = "";
}

function deleteTask() {
  let removeDivButton = document.getElementById("deleteButton");
  let removeDiv = removeDivButton.parentElement;
  removeDiv.remove();
}

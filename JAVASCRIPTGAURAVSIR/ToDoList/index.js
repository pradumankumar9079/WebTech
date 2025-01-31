let inputBox = document.getElementById("input-box");
let addBtn = document.getElementById("add-button");
let toDoContainer = document.getElementById("task-list-container");

// var deleteBtn = document.createElement("button");
function adddTodo() {
  let inputData = inputBox.value.trim();
  // Validation if user will not enter anything  inputData.length<=0 or use inputData=null;
  if (inputData.length <= 0) {
    alert("Enter a task");
  } else {
    // console.log(inputData);
    let taskList = document.createElement("li");
    let tasks = document.createElement("p");
    let editBtn = document.createElement("button");
    // adding attribute in Edit Button
    editBtn.id = "edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    tasks.innerHTML = inputData;
    editBtn.innerHTML = "Edit";
    deleteBtn.innerHTML = "Delete";
    taskList.appendChild(tasks);
    taskList.appendChild(editBtn);
    taskList.appendChild(deleteBtn);

    toDoContainer.appendChild(taskList);
    inputBox.value = "";
  }
}

// whatever click that targeted element store in (((((e)))))) this is event handling
// function deleteTodo(e) {
//   e.target.parentElement.remove();
// }
addBtn.addEventListener("click", adddTodo);
// deleteBtn.addEventListener("click", deleteTodo);

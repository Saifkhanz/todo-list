var tasks = [];
//This function add task
function addTask() {
  document.getElementById("error").innerHTML = "";
  newTask = document.getElementById("NewTask");

  if (newTask.value == "") {
    document.getElementById("error").innerHTML = "Please Enter the task";
  } else {
    tasks.push({
      name: newTask.value,
      isCompeleted: false,
    });

    document.getElementById("TaskTotal").innerHTML = countTotalTask();
    newTask.value = "";
    renderTasks();
  }
}
// this function is render the task
function renderTasks() {
  let TaskListContainer = document.getElementById("TaskList");
  TaskListContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    new_row = document.createElement("tr");
    new_row.className = "task";
    new_row.insertCell(0).innerHTML =
      `<input type='checkbox' class='checkbox1' onclick='markTaskAsCompleted(` +
      index +
      `)' name='checkbox' ` +
      (task.isCompeleted ? "checked" : "") +
      `>`;
    new_row.insertCell(1).innerHTML = task.name;
    new_row.insertCell(2).innerHTML =
      '<i class="fa-solid fa-trash" style="margin-right:8px;margin-left:18px"; onclick="deleteTask(' +
      index +
      ')"></i>';
    new_row.insertCell(3).innerHTML =
      '<button onclick="editTask(' +
      index +
      ')"name="edit" class="editButton">EDIT';
    TaskListContainer.appendChild(new_row);
  });
}
function countTotalTask() {
  var arr = tasks.length;

  return arr;
}
function editTask(taskId) {
  var oldValue = tasks[taskId].name;
  var newValue = prompt("New Value?", oldValue);
  if (!newValue) {
    return;
  }
  tasks[taskId].name = newValue;
  this.renderTasks();
  return;
}

// this function is used for counted completed task
function markTaskAsCompleted(taskId) {
  if (tasks[taskId].isCompeleted === false) {
    tasks[taskId].isCompeleted = true;
  } else {
    tasks[taskId].isCompeleted = false;
  }
  this.countCompletedTask();
}
//this function used for deleting total task
function deleteTask(taskIndex) {
  if (!confirm("Are you sure want to delete!")) return;
  tasks.splice(taskIndex, 1);
  document.getElementById("TaskTotal").innerHTML = countTotalTask();
  renderTasks();
}

function countCompletedTask() {
  var completed = 0;
  this.tasks.forEach(function (task) {
    if (task.isCompeleted) {
      completed++;
    }
  });
  document.getElementById("TaskCompleted").innerHTML = completed;
}

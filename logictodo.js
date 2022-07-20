var counter = 0;
var completetdTaskCounter = 0;
//var completedTaskCount = [];
var tasks = [];
//This function add task
function addTask() {
  document.getElementById("error").innerHTML = "";

  let newTask = document.getElementById("NewTask");

  if (newTask.value == "") {
    document.getElementById("error").innerHTML = "Please Enter the task";
  } else {
    tasks.push({
      name: newTask.value,
      isCompeleted: false,
    });
    counter++;
    document.getElementById("TaskTotal").innerHTML = counter;
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
      `<input type='checkbox' onclick='completedTask("` +
      index +
      `")' name='checkbox' class="check">`;
    new_row.insertCell(1).innerHTML = task.name;
    new_row.insertCell(2).innerHTML =
      '<a href="javascript:void(0)" onclick="deleteTask(' +
      index +
      ')" class="fa-solid fa-trash">Delete</a>';
    new_row.insertCell(3).innerHTML =
      '<button onclick="editTask(' + index + ')"name="edit">EDIT';
    TaskListContainer.appendChild(new_row);
    //getTotal();
  });
}

function editTask(taskId) {
  //TaskListContainer.innerHTML = task[taskId];

  var temp = (document.getElementById("NewTask").value = tasks[taskId].name);
  //tasks.splice(0, taskId, temp);
  deleteTask(taskId);
}

// this function is used for counted completed task
function completedTask(taskId) {
  if (tasks[taskId].isCompeleted === false) {
    completetdTaskCounter++;
    tasks[taskId].isCompeleted = true;
  } else {
    completetdTaskCounter--;
    tasks[taskId].isCompeleted = false;
  }
  //const completedTasks = tasks.filter((task) => task.isCompeleted === true);
  total_completed_task = document.getElementById("TaskCompleted");
  total_completed_task.innerHTML = completetdTaskCounter;
  //total_completed_task.innerHTML = completedTasks.length;
}
//this function used for deleting total task
function deleteTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  counter--;
  document.getElementById("TaskTotal").innerHTML = counter;
  renderTasks();
}
// function getTotalCompletedTask() {
//   var rowCount = document.querySelectorAll("#TaskList tr.completed").length;

//   total_completed_task = document.getElementById("TaskCompleted");
//   total_completed_task.innerHTML = rowCount;
// }

/* this function used for total task
// function getTotal() {
//   var rowCount = document.querySelectorAll("#TaskList tr").length;
//   total_task = document.getElementById("TaskTotal");
//   total_task.innerHTML = rowCount;

  // let TaskList=document.getElementById('TaskList');
  // var rowCount = TaskList.childElementCount;
  // total_task=document.getElementById('TaskTotal');
  // total_task.innerHTML='Total :'+rowCount;
}
*/
// function isChecked() {
//
//   var temp = document.getElementsByClassName("check").value;
//   console.log(temp);
//
//   if (document.getElementsByClassName("check").checked) {
//     completetdTaskCounter--;
//     total_completed_task = document.getElementById("TaskCompleted");
//     total_completed_task.innerHTML = completetdTaskCounter;
//
//   } else {
//     completetdTaskCounter++;
//     total_completed_task = document.getElementById("TaskCompleted");
//     total_completed_task.innerHTML = completetdTaskCounter;
//
//   }
// }
// function com(isCompeleted) {
//   console.log(isCompeleted);
//   var flag = 1;
//   if (isCompeleted === "false" && flag) {
//
//     isCompeleted = "true";
//     completetdTaskCounter++;
//     alert(isCompeleted);
//     flag = 0;
//   } else {
//     completetdTaskCounter--;
//
//     isCompeleted = "false";
//     alert(isCompeleted);
//   }
//   total_completed_task = document.getElementById("TaskCompleted");
//   total_completed_task.innerHTML = completetdTaskCounter;
//   //completetdTaskCounter = 0;
// }
// function lastTry(taskId) {
//   var tempIndex = taskId;
//
//   document.getElementsByClassName("task").textContent = "Task Completed";
// }\
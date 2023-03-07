const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// Add task to the list
function addTask() {
    const taskInput = document.querySelector("input[type='text']");
    if (taskInput.value !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value + "<button class='deleteBtn'>Delete</button><button class='editBtn'>Edit</button>";
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}
// Add task to the pending list
function addTask() {
    const taskInput = document.querySelector("input[type='text']");
    if (taskInput.value !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value + "<button class='deleteBtn'>Delete</button><button class='editBtn'>Edit</button><button class='completeBtn'>Mark as completed</button>";
        pendingList.appendChild(newTask);
        taskInput.value = "";
    }
}

// Delete task from the list
function deleteTask(event) {
    if (event.target.classList.contains("deleteBtn")) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
}


// Mark task as completed
function completeTask(event) {
    if (event.target.classList.contains("completeBtn")) {
        const li = event.target.parentElement;
        li.removeChild(li.childNodes[2]); // remove the 'Mark as completed' button
        li.classList.add("completed"); // add the 'completed' class to the task's li element
        completedList.appendChild(li); // move the task to the 'completed' list
    }
}

// Edit task in the list
function editTask(event) {
    if (event.target.classList.contains("editBtn")) {
        const li = event.target.parentElement;
        const taskInput = document.querySelector("input[type='text']");
        taskInput.value = li.firstChild.textContent;
        taskList.removeChild(li);
    }
}

// Add event listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", editTask);
pendingList.addEventListener("click", deleteTask);
pendingList.addEventListener("click", editTask);
pendingList.addEventListener("click", completeTask);
completedList.addEventListener("click", deleteTask);




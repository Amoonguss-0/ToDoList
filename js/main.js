window.onload = function () {
    var buttonClick = document.getElementById("button");
    buttonClick.onclick = addList;
};
var ToDoList = (function () {
    function ToDoList() {
    }
    return ToDoList;
}());
var picker = datepicker("#due-date");
picker.setMin(new Date());
function createList() {
    var list = new ToDoList();
    var taskInput = document.getElementById("task");
    list.task = taskInput.value;
    var dueDateInput = document.getElementById("due-date");
    list.dueDate = new Date(dueDateInput.value);
    return list;
}
function displayList(myList) {
    var displayDiv = document.getElementById("display");
    var displayTask = document.createElement("h2");
    displayTask.innerText = myList.task;
    var displayDate = document.createElement("p");
    displayDate.innerText = myList.dueDate.toDateString();
    displayDiv.appendChild(displayTask);
    displayDiv.appendChild(displayDate);
}
function addList() {
    if (allDataValid()) {
        var toDo = createList();
        displayList(toDo);
    }
}
function allDataValid() {
    var taskInput = document.getElementById("task");
    var task = taskInput.value;
    if (task == "") {
        var errorSpan1 = document.getElementById("task-span");
        errorSpan1.innerText = "Please input a task name";
        return false;
    }
    return true;
}

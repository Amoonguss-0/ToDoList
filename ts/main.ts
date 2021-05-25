window.onload = function(){
    let buttonClick = <HTMLButtonElement>document.getElementById("button");
    buttonClick.onclick = addList;
}

class ToDoList{
    task:string;
    dueDate:Date;
}

const picker = datepicker("#due-date");
picker.setMin(new Date());

// want to create a list item you can click after to show completion 
function createList():ToDoList{
    let list = new ToDoList();

    let taskInput = <HTMLInputElement>document.getElementById("task");
    list.task = taskInput.value;

    let dueDateInput = <HTMLInputElement>document.getElementById("due-date");
    list.dueDate = new Date(dueDateInput.value);

    return list;
}

function displayList(myList:ToDoList):void{
    let displayDiv = document.getElementById("display");

    // Creates the task 
    let displayTask = document.createElement("h2");
    displayTask.innerText = myList.task;

    // Shows the due Date
    let displayDate = document.createElement("p");
    displayDate.innerText = myList.dueDate.toDateString();

    displayDiv.appendChild(displayTask);
    displayDiv.appendChild(displayDate);
}

function addList(){
    if(allDataValid()){
        let toDo = createList();
        displayList(toDo);
    }
}

function allDataValid():boolean{
    let taskInput = <HTMLInputElement>document.getElementById("task");
    let task = taskInput.value;

    if(task == ""){
        let errorSpan1 = <HTMLSpanElement>document.getElementById("task-span");
        errorSpan1.innerText = "Please input a task name"
        return false;
    }

    return true;
}

//make a delete for completed tasks
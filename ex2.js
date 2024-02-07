var Tasks = [];
function addTask(task) {
    var length;
    length = Tasks.push(task);
    console.log(task + " has been added to out Tasks Array");
    return length;
}
function listAllTasks() {
    //for(let i=0; i<addTask.length;i++){  
    // }
    Tasks.forEach(function (element) {
        console.log("Task " + element + " is on our Tasks Array.");
    });
}
function deleteTask(task) {
    var index;
    index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been deleted from our Tasks Array");
    }
    else {
        console.log(task + " was not found in our Tasks Array");
    }
    return Tasks.length;
}
addTask("Eat Lunch");
listAllTasks();
deleteTask("Eat Lunch");

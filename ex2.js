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
addTask("Eat Lunch");
listAllTasks();

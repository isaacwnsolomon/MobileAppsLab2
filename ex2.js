var Tasks = [];
function addTask(task) {
    var length;
    length = Tasks.push(task);
    console.log(task + " has been added to out Tasks Array");
    return length;
}
addTask("Eat Lunch");

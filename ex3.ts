
export interface tasksInterface {
    Tasks: Array<string>;
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class Tasks implements tasksInterface {

    constructor() { }

    Tasks: Array<string> = [];

    addTask(task: string): number {
        let length: number;

        length = this.Tasks.push(task);
        console.log(task + " has been added to out Tasks Array");
        return length;
    }
}
listAllTasks(): void {
   this.Tasks.forEach(function (element) {
        console.log("Task " + element + " is on our Tasks Array.")
    })
}
deleteTask(Tasks: string): number {
    let index: number;
    index = this.Tasks.indexOf(Tasks);
    if (index > -1) {
        this.Tasks.splice(index, 1);
        console.log(Tasks + " has been deleted from our Tasks Array");
    }
    else {
        console.log(Tasks + " was not found in our Tasks Array");
    }
    return Tasks.length;
}

let myTodos = new Tasks();
myTodos.addTask("Eat");
myTodos.listAllTasks();
myTodos.deleteTask("Eat");
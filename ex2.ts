
let Tasks:Array<string>=[];

function addTask(task:string):number{
    let length:number;

    length = Tasks.push(task);
    console.log(task+" has been added to out Tasks Array");
    return length;
}

addTask("Eat Lunch");

let Tasks:Array<string>=[];

function addTask(task:string):number{
    let length:number;

    length = Tasks.push(task);
    console.log(task+" has been added to out Tasks Array");
    return length;
}

function listAllTasks():void{
    //for(let i=0; i<addTask.length;i++){  
   // }
   Tasks.forEach(function(element){
    console.log("Task "+element+ " is on our Tasks Array.")
   })
}

addTask("Eat Lunch");
listAllTasks();
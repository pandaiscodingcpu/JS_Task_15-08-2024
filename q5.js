
let todo_items = ["1. Buy groceries", "2. Haircut", "3. Finish Assignmets"]; 

function add(task){
    todo_items.push(task);
    console.log("Task added: " + task);
}
function remove(task){
    const index = todo_items.indexOf(task);
    if (index > 0) {
        todo_items.splice(index, 1);
        console.log("Task removed: " + task);
    }
    else {
        console.log("Task not found: " + task);
    }
}
function display(){
    console.log("Todo List:");
    for (let i = 0; i < todo_items.length; i++) {
        console.log(todo_items[i]);
    }
}

while (true) {
    let choice = prompt("Enter your choice:\n1. Add Task\n2. Remove Task\n3. Display Tasks\n4. Exit");
    if (choice === "1") {
        let task = prompt("Enter the task to add:");
        add(task);
    }
    else if (choice === "2") {
        let task = prompt("Enter the task to remove:");
        remove(task);
    }
    else if (choice === "3") {
        display();
    }
    else if (choice === "4") {
        console.log("Exiting the Todo List application.");
        break;
    }
}
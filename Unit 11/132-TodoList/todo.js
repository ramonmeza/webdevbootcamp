var todoList = [];

while(true) {
    var response = prompt("Enter a command").toLowerCase();

    if(response === "quit"){
        break;
    } else if (response === "new") {
        todoList.push(prompt("Add new item"));
    } else if(response === "view") {
        console.log(todoList);
    }
}
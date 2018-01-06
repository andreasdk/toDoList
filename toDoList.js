setTimeout(function(){

var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
  	listTodos();
  } else if(input === "new") {
	addTodo();
} else if(input === "delete") {
	deleteTodo();
}
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");

function listTodos() {
	console.log("**********")
  	todos.forEach(function(todo, index){
   	console.log(index + ": " + todo);
  	});
  	console.log("**********")
}

function addTodo() {
	//ask for new todo
    var newTodo = prompt("Enter new To-do");
	//add to todos array
    todos.push(newTodo);
    console.log("Task added to list");
}

function deleteTodo() {
	//asks for index of item to be deleted
	var index = prompt("Enter index of item to delete");
	//deletes that item
	//splice()
	todos.splice(index,1);
	console.log("Task deleted");
}
}, 250);
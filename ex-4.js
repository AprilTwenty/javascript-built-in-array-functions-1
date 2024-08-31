const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  let checkCompleted = todos.filter((todos) => todos.completed === true ? true: false);
  return checkCompleted;
//  return todos.filter(checkCompleted);
}
/*
function checkCompleted(todos){
  if (todos.completed === true) {
    return true;
  } else{
    return false;
  }
}
*/
getCompletedTodo(todos);
console.log(getCompletedTodo(todos))

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/

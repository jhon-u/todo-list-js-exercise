// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false
  };
  return task;
}

//Prints out the provided task's details
function logTaskState(task) {
  console.log(`${task.title} has ${task.complete ? "" : "not"} been completed`);
}

// Marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);

console.log(tasks);

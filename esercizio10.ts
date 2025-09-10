interface Task {
  id: string;
  text: string;
  done: boolean;
}

function toggleTask(tasks: Task[], id: string): Task[] {
  return tasks.map(task => {
    if (task.id === id) {
      return {...task, done: !task.done};
    }
    return task;
  });
}

let tasksArray: Task[] = [
  { id: "1", text: "Fare sport", done: false },
  { id: "2", text: "Studiare", done: true }
];

console.log(toggleTask(tasksArray, "1"));

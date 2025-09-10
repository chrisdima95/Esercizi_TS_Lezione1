interface Task {
  id: string;
  text: string;
  done: boolean;
}

let tasks: Task[] = [
  { id: "1", text: "Fare la spesa", done: false },
  { id: "2", text: "Pulire casa", done: true }
];

console.log(tasks);

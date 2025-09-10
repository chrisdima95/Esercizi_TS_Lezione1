interface Task {
  id: string;
  text: string;
  done: boolean;
}

interface Store {
  tasks: Task[];
  add(task: Task): void;
}

let store: Store = {
  tasks: [],
  add(task: Task): void {
    this.tasks.push(task);
  }
};

store.add({ id: "1", text: "Comprare pane", done: false });
console.log(store.tasks);

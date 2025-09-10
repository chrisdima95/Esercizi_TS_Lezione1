interface Task {
  id: string;
  text: string;
  done: boolean;
}

interface TaskConScadenza extends Task {
  dueDate?: Date;
}

let taskConData: TaskConScadenza = {
  id: "3",
  text: "Pagare bollette",
  done: false,
  dueDate: new Date('2025-12-31')
};

console.log(taskConData);

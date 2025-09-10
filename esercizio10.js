"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toggleTask(tasks, id) {
    return tasks.map(task => {
        if (task.id === id) {
            return { ...task, done: !task.done };
        }
        return task;
    });
}
let tasksArray = [
    { id: "1", text: "Fare sport", done: false },
    { id: "2", text: "Studiare", done: true }
];
console.log(toggleTask(tasksArray, "1"));

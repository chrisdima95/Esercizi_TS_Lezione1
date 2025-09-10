"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let store = {
    tasks: [],
    add(task) {
        this.tasks.push(task);
    }
};
store.add({ id: "1", text: "Comprare pane", done: false });
console.log(store.tasks);

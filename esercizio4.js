"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ordinaArray(arr, order) {
    if (order === 'asc') {
        return arr.sort((a, b) => a - b);
    }
    else {
        return arr.sort((a, b) => b - a);
    }
}
console.log(ordinaArray([3, 1, 2], 'asc'));

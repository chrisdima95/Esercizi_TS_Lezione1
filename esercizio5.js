"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saluta(nome = 'ospite') {
    return `Ciao, ${nome}!`;
}
console.log(saluta());
console.log(saluta("Anna"));

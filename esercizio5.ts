function saluta(nome: string = 'ospite'): string {
  return `Ciao, ${nome}!`;
}

console.log(saluta());
console.log(saluta("Anna"));

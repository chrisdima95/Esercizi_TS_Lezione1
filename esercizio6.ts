function media(...numeri: number[]): number {
  const somma = numeri.reduce((acc, val) => acc + val, 0);
  return numeri.length === 0 ? 0 : somma / numeri.length;
}

console.log(media(10, 20, 30));
console.log(media());

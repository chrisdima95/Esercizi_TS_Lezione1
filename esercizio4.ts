type SortOrder = 'asc' | 'desc';

function ordinaArray(arr: number[], order: SortOrder): number[] {
  if (order === 'asc') {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
}

console.log(ordinaArray([3, 1, 2], 'asc'));

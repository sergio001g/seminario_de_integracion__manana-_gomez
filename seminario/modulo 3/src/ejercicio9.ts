function minMax(nums: number[]): [number, number] {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return [min, max];
}

const [min, max] = minMax([5, 3, 9, 1, 7]);
console.log(`Mínimo: ${min}, Máximo: ${max}`);

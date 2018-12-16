// Multiples 3 and 5
function sum(limit) {
  let sum = 0;
  for (let i = limit; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sum(10));
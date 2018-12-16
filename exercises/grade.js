// Average 
// 1 - 59:F
// 60 - 69:D
// 70 - 79:C
// 80 - 89:B
// 90 - 100:A

const marks = [80, 100, 90, 100];

function calculateGrade(marks) {
  const avg = average(marks);
  if (avg < 60) return 'F';
  if (avg < 70) return 'D';
  if (avg < 80) return 'C';
  if (avg < 90) return 'B';
  return 'A';
}

function average(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum / array.length;
}

console.log(calculateGrade(marks));
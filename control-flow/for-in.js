const person = {
  name: 'Manuel',
  age: 31
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ['red', 'blue', 'gray'];

for (let index in colors) {
  console.log(index, colors[index]);
}
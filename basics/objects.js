let person = {
  name: 'Manuel',
  age: 30
};

console.log(person);

// Dot Notation
person.name = 'Manuel Alejandro';

console.log(person.name);

// Bracket Notation
person['age'] = 31;
console.log(person['age']);

// dynamic
let selection = 'name';
person[selection] = 'Manuel';

console.log(person);
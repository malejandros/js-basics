// Falsy values (false)
// undefined
// null
// NaN
// 0
// ''
// false
// Anything that is not falsy --> Truthy
console.log(false || false);
console.log(false || 'Manuel');
console.log(false || 1);

// Short-circuiting
console.log(false || 1 || 2);

// Example
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
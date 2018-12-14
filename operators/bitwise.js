// 1 = 00000001
// 2 = 00000010

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read, Write, Execution
// 00000100  --> read
// 00000010  --> write
// 00000001  --> execution

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
// 00000000 myPermission
// 00000100 readPermission
// 00000010 writePermission
// myPermission 00000110 = 6
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);
// 00000110
// 00000100 
// 00000100

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);
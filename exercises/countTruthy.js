function countTruthy(array) {
  let truthy = 0;

  for (const element of array) {
    if (element)
      truthy++;
    // if (!(element === false || element === 0 || element === undefined ||
    //     element === null || element === '' || element === NaN)) {
    //   truthy++;
    // }
  }
  return truthy;
}

const array = ['', 0, false, 1, 2, 3, 4, undefined];
console.log('Array length:', array.length);
console.log('Truthy elements:', countTruthy(array));
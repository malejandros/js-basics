// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// console.log(true && true);
// console.log(true && false);

let highIncome = false;
let goodCreditScore = false;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE is of the operands are TRUE
goodCreditScore = false;
eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible:', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application refused', applicationRefused);
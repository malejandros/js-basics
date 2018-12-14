// Hour
// if hour is between 6 am and 12 pm: Good morning
// if hour is between 12 pm and 6 pm: Good afternoon
// Otherwise: Good evening!

// if ( condition ){
//   statement;
// } else if( anotherCondition ){
//   statement;
// } else{
//   statement;
// }
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log('Good morning');
} else if (hour >= 12 && hour < 6) {
  console.log('Good afternon');
} else {
  console.log('Good evening');
}
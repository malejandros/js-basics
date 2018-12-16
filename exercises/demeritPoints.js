// Speed limit <= 70 
// +5 limit -> 1 point
// More 12 points --> suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return 'ok';
  const points = Math.floor((speed -= speedLimit) / kmPerPoint);
  return (points >= 12) ? 'License suspended' : 'Points:' + points;
}

console.log(checkSpeed(130));
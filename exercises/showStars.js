function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let starts = '';
    for (let j = 1; j <= i; j++) {
      starts += '*';
    }
    console.log(starts);
  }
}

showStars(20);
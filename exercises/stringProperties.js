const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 5,
  director: 'b'
};

function stringProperties(obj) {
  for (property in obj) {
    if (typeof obj[property] === 'string') {
      console.log(property, obj[property]);
    }
  }
}

stringProperties(movie);
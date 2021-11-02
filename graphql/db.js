export let movies = [
  {
    id: "0",
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: "1",
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: "2",
    name: "The Godfather I",
    score: 99
  },
  {
    id: "3",
    name: "Logan",
    score: 2
  }
];

export const getById = (id) => {
  const filterdMovie = movies.filter(movie => movie.id === String(id))
  return filterdMovie[0];
}

export const deleteById = (id) => {
  const newArray = movies.filter(movie => movie.id !== String(id))
  if(movies.length > newArray.length){
    movies = newArray;
  }
  return movies
}

export const addById = (name, score) => {
  const newElement = {
    id : String(movies.length + 1),
    name,
    score
  }
  movies = [...movies, newElement]
  return movies
}
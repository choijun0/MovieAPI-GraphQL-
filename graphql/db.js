export const people = [
  {
    id : "1",
    name : "choi",
    age : 22,
    job : "soldier"
  },
  {
    id : "2",
    name : "stella",
    age : 21,
    job : "soldier"
  },
  {
    id : "3",
    name : "jhon",
    age : 20,
    job : "soldier"
  },
  {
    id : "4",
    name : "cina",
    age : 22,
    job : "soldier"
  },
  {
    id : "5",
    name : "haru",
    age : 22,
    job : "soldier"
  },
  {
    id : "6",
    name : "getiig",
    age : 22,
    job : "soldier"
  },
  {
    id : "7",
    name : "changn",
    age : 22,
    job : "soldier"
  },
]

export const getById = (id) => {
  const filteredPerson = people.filter(person => person.id === String(id))
  return filteredPerson[0];
}
import {movies, getById, deleteById, addById} from "./db.js"


//movie는 query로 부터 두번째 변수에 arguments를 전달받음 
export const resolvers = {
  Query: {
    movies : () => movies,
    movie : (_, {id}) => getById(id),
  },
  Mutation: {
    deleteElement : (_,{id}) => deleteById(id),
    addElement : (_, {name, score}) => addById(name, score),
  }
}
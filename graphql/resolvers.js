import {people, getById} from "./db.js"


//person은 query로 부터 두번째 변수에 arguments를 전달받음 
export const resolvers = {
  Query: {
    people : () => people,
    person : (_, {id}) => getById(id)
  },
}
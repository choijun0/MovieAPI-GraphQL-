import { GraphQLServer } from 'graphql-yoga'


//--temporary database--
const choijun0 = {
  name : "choi",
  age : 22,
  job : "soldier"
}
//-----------------------


const resolvers = {
  Query: {
    person : () => choijun0
  },
}

const server = new GraphQLServer({ 
  typeDefs : "graphql/schema.graphql", 
  resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
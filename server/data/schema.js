import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import resolvers from "./resolvers";

// Our typeDef string defines our schema
// Define your types within rootQuery that client is allowed to request
const typeDefs = `
# the schema allows the following query;
type Query {
  user(username: String): User
}

type User {
  id: ID!
  username: String
  posts: [Post]
}

type Post {
  id: ID!
  userId: Int
  description: String
  calories: Int
  image: String
  servingAt: Restaurant
}

type Restaurant {
  id: ID!
  name: String
  address: String 
  serving: [Post]
}

`;


// Make executable GraphQL schema from defined typeDefs
const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;

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
  user(id: ID!): User
  restaurants: [Restaurant]
}

type Mutation {
  createNewFoodPost(description: String, image: String, userId: Int): Post
}

type User {
  id: ID!
  avatar: String
  username: String
  firstName: String
  lastName: String
  email: String
  posts: [Post]
}

type Post {
  id: ID!
  user: Int
  description: String
  image: String
  servingAt: Restaurant
  createdAt: String
}

type Restaurant {
  id: ID!
  name: String
  address: String 
  tel: String
  serving: [Post]
  fortuneCookie: String
}

`;


// Make executable GraphQL schema from defined typeDefs
const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;

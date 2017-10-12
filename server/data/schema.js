import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mocks'

// Our typeDef string defines our schema
// Define your types within rootQuery that client is allowed to request
const typeDefs = `
type Query {
  meal(id: ID): Meal
  author(firstName: String, lastName: String): Author
}

type Restaurant {
  id: ID!
  name: String
  address: String
  menu: [Meals]
}

type Meal {
  id: ID!
  description: String
  catefory: String
  calories: Number
  image: String
  servingAt: [Restaurant]
}




`;

// TODO: Define resolvers

// Make executable GraphQL schema from defined typeDefs
const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;

export const typeDefs = `

type Query {
  user: User
  restaurants: [Restaurant]
}

type User {
  id: ID!
  username: String
  firstName: String
  lastName: String
  email: String
  posts: [Post]
}

type Restaurant {
  id: ID!
  name: String
  address: String 
  tel: String
  serving: [Post]
  fortuneCookie: String
}

type Post {
  id: ID!
  user: Int
  description: String
  calories: Int
  image: String
  servingAt: Restaurant
}
`
import { User } from './connectors';

const resolvers = {
  Query: {
    user(_, args) {
      return User.find({ where: args });
    }
  },
  User: {
    posts(user) {
      return user.getPosts();
    }
  },
  Post: {
    user(post) {
      return post.getUser();
    },
    servingAt(post) {
      return post.getRestaurant();
    }
  },
  Restaurant: {
    serving(restaurant) {
      return restaurant.getPosts();
    }
  }
}

export default resolvers;
import { User, Restaurant, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    user(_, args) {
      return User.find({ where: args });
    },
    restaurants(_, args) {
      return Restaurant.findAll()
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
    },
    fortuneCookie() {
      return FortuneCookie.getOne()
    }
  }
}

export default resolvers;
import { User, Restaurant, FortuneCookie, Post } from './connectors';
import Faker from 'faker';

const resolvers = {
  Query: {
    user(_, args) {
      return User.find({ where: args });
    },
    restaurants(_, args) {
      return Restaurant.findAll()
    }
  },
  Mutation: {
    createNewFoodPost: (_, args) => {
      return Post.create({
        userId: args.userId,
        description: args.description,
        image: args.image,
        restaurantId: Math.random()*(10-1)+1
      })
      .then(post => {
        return post
      })
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
const resolvers = {
  Query: {
    user(root, args) {
      return { id: 1, username: 'greg_likes_waffles' }
    }
  },
  User: {
    posts(user) {
      return [
        { id: 1, userId: 1, description: 'd1', calories: 123, image: 'image.jpg', servingAt: 'JJ Diner' },
        { id: 2, userId: 1, description: 'd2', calories: 234, image: 'image2.jpg', servingAt: 'ABC Diner' },
        { id: 3, userId: 1, description: 'd2', calories: 234, image: 'image2.jpg', servingAt: 'ABC Diner' }
      ];
    }
  },
  Post: {
    servingAt(post) {
      return { id: 1, name: 'JJ Diner', address: '123 Main Street, New York'}
    }
  },
  Restaurant {
    serving(restaurant) {
      return [
        { id: 1, description: 'd1', calories: 123, image: 'image.jpg', servingAt: 'JJ Diner' }
      ]
    }
  }
}

export default resolvers;
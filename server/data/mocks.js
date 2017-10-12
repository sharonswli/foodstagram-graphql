import casual from 'casual';

const mocks = {
  Query: () => ({
    user: (root, args) => {
      return { id: 1, username: 'greg_likes_waffles' };
    }
  }),
  User: () => ({ 
    id: () => casual.integer(1, 10),
    username: () => casual.word, 
    post: () => casual.array_of_words(8)
  }),
  Post: () => ({
    id: () => casual.integer(1, 100),
    description: () => casual.description,
    category: () => casual.word,
    calories: () => casual.integer(0, 1000),
    image: () => casual.uuid,
    servingAt: () => casual.array_of_words(3)
  }),
  Restaurant: () => ({
    id: () => casual.integer(1, 100),
    name: () => casual.company_name,
    address: () => casual.address
  })

};

export default mocks;

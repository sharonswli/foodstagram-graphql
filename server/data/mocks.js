import casual from 'casual';

const mocks = {
  Query: () => ({
    restaurant: (root, args) => {
      return { name: args.name, address: args.address };
    }
  }),
  Restaurant: () => ({ 
    name: () => casual.company_name, 
    address: () => casual.address,
    menu: () => casual.array_of_words(8)
  }),
  Meal: () => ({
    description: () => casual.description,
    category: () => casual.word,
    calories: () => casual.integer(0, 1000),
    image: () => casual.uuid,
    servingAt: () => casual.array_of_words(3)
  })

};

export default mocks;

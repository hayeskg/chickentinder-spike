import { Cat } from './models/Cat';
import { books } from './models/books'

export const resolvers = {
  Query: {
    books: () => books,
    hello: () => 'hi',
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: (_, { name }) => {
      const kitty = new Cat({ name });
      return kitty.save();

    }
  }
}


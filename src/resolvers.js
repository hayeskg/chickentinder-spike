import { Cat } from './models/Cat';
import { books } from './models/books';

const axios = require('axios');



export const resolvers = {
  Query: {
    books: () => books,
    hello: () => 'hi',
    cats: () => Cat.find(),
    getArticle: (_, { id }) => {
      return axios.get(`https://nc-news-hayeskg.herokuapp.com/api/articles/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data.article);
          return response.data.article;
        })
    }
  },
  Mutation: {
    createCat: (_, { name }) => {
      const kitty = new Cat({ name });
      return kitty.save();

    }
  }
}


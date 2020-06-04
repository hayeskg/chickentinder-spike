const { ApolloServer, gql } = require('apollo-server-express');
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';


const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at localhost:4000${server.graphqlPath}`);
  });

}

startServer();









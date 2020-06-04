import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Book {
      title: String
      author: String
    }
  
  type Query {
    hello: String!,
    books: [Book],
    cats: [Cat!]!,
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;
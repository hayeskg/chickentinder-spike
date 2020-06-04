import { gql } from "apollo-server-express";

// var http = require("https");

// let leedsTrip = null;

// var options = {
//   "method": "GET",
//   "hostname": "tripadvisor1.p.rapidapi.com",
//   "port": null,
//   "path": "/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=leeds",
//   "headers": {
//     "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
//     "x-rapidapi-key": "593a6b9298mshb7f42474acf3a09p1ae990jsn8aaf21f70cc6",
//     "useQueryString": true
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//     leedsTrip = body.toString();
//   });
// });

// req.end();

// console.log(leedsTrip.data[4]);



export const typeDefs = gql`
  type Book {
      title: String
      author: String
    }
  
  type Query {
    hello: String!,
    books: [Book],
    cats: [Cat!]!,
    getArticle(id: Int!): Article,
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }

  type Restaurant{
    location_id: String
    name: String
    latitude: String
    longitude: String
    location_string: String
  }

  type Article {
    article_id: Int
    title: String
    body: String
    vote: Int
    topic: String
    author: String
    comment_count: Int
  }



`;
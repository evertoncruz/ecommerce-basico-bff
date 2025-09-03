// ecommerce-basico/schema.js
const { gql } = require('apollo-server-express');

// O esquema define os tipos de dados e as queries disponíveis
const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    description: String!
    category: String!
    image: String!
    rating: Rating!
  }

  type Rating {
    rate: Float!
    count: Int!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;

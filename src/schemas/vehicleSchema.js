const { gql } = require('apollo-server');

const typeDefs = gql`
  type Vehicle {
    id: ID!
    make: String!
    model: String!
    year: Int!
    price: Float!
  }

  type Query {
    vehicles: [Vehicle!]!
    vehicle(id: ID!): Vehicle
  }

  type Mutation {
    addVehicle(make: String!, model: String!, year: Int!, price: Float!): Vehicle
    updateVehicle(id: ID!, make: String, model: String, year: Int, price: Float): Vehicle
    deleteVehicle(id: ID!): String
  }
`;

module.exports = typeDefs;
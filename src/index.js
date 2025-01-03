const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/vehicleSchema');
const resolvers = require('./resolvers/vehicleResolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
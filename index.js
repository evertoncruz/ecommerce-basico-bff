// ecommerce-basico/index.js
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const http = require('http');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Adiciona esta linha para desativar o cache de queries persistidas
    persistedQueries: false,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;
  
  await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startApolloServer();

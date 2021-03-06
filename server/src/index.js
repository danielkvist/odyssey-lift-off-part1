const { ApolloServer, MockList } = require('apollo-server');
const typeDefs = require('./schema');
const mocks = require('./mocks');

// To enable basic mocked data we could provide
// mocks: true to the ApolloServer.
const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
	console.log(`
    🚀 Server is running!
    📡 Listening on port 4000
    📭 Query at https://studio.apollographql.com/dev
  `);
});

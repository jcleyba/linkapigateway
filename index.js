require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./typeDefs/index');
const resolvers = require('./resolvers/index');
const http = require('./http');

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) =>
    (http.defaults.headers.common['Authorization'] =
      request.headers.authorization),
});

server.start(
  {
    cors: {
      origin: process.env.FRONTEND_URL,
    },
  },
  () => console.log(`Server is running on port 4000`)
);

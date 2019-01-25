const { GraphQLServer } = require("graphql-yoga");
const typeDefs = require("./typeDefs/index");
const resolvers = require("./resolvers/index");

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on port 4000`));

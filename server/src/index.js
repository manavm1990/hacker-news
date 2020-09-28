import { GraphQLServer } from "graphql-yoga";

import { typeDefs, resolvers } from "./graphql";

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.info("Server 🏃🏽‍♂️! http://localhost:4000");
});

import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";

import { typeDefs, resolvers } from "./graphql";

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs,
  resolvers,

  // 'resolvers' can get access to 'context
  context:
    // 'resolvers' can read 'Authorization' header for user validation
    (request) => ({
      ...request,
      prisma,
    }),
});

server.start(() => {
  console.info("Server 🏃🏽‍♂️! http://localhost:4000");
});

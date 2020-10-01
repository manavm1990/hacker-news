import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";

import { typeDefs, resolvers } from "./graphql";

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs,
  resolvers,

  // Give 'resolvers' access to 'constext.prisma'
  context: {
    prisma,
  },
});

server.start(() => {
  console.info("Server 🏃🏽‍♂️! http://localhost:4000");
});

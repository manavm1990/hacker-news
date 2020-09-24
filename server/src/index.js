import { GraphQLServer } from "graphql-yoga";

// Schema def
const typeDefs = `
  type Query {
    info: String!
  }
`;

// Schema implementation
const resolvers = {
  Query: {
    info: () => "Test API Route",
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.info("Server 🏃🏽‍♂️! http://localhost:4000");
});

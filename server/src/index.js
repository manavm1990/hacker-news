import { GraphQLServer } from "graphql-yoga";

// Schema implementation
// The appropriate 'resolvers' are invoked based on the incoming 'query object properties'
const resolvers = {
  Query: {
    // names must match names from 'Query' SDL 👆🏽
    info: () => "Test API Route",
    feed: () => links,
  },

  Mutation: {},
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});

server.start(() => {
  console.info("Server 🏃🏽‍♂️! http://localhost:4000");
});

// Dummy Data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

import { GraphQLServer } from "graphql-yoga";

// Schema def
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

// Schema implementation
// The appropriate 'resolvers' are invoked based on the incoming 'query object properties'
const resolvers = {
  Query: {
    // names must match names from 'Query' SDL 👆🏽
    info: () => "Test API Route",
    feed: () => links,
  },
};

const server = new GraphQLServer({
  typeDefs,
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

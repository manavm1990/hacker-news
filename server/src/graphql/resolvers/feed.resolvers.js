// Dummy Data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

export default {
  Query: {
    // names must match names from 'Query' SDL 👆🏽
    info: () => "Test API Route",
    feed: () => links,
  },

  Mutation: {},
};

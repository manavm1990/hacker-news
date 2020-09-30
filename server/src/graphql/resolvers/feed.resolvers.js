// Dummy Data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

// Each 'resolver' 'backs' a 'typedef'
export default {
  Query: {
    feed: () => links,
  },

  Mutation: {},
};

// Dummy Data
const links = [
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

  Mutation: {
    post: (parent, { id = `link-${links.length}`, description, url }) => {
      const newLink = { id, description, url };
      links.push(newLink);
      return newLink;
    },
  },
};

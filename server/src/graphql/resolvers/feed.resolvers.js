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
    link: (_, args) => links.find(({ id }) => id === args.id),
  },

  Mutation: {
    post: (_, { id = `link-${links.length}`, description, url }) => {
      const newLink = { id, description, url };
      links.push(newLink);
      return newLink;
    },
    update: (_, args) => {
      // TODO: 'handle error 🥅' if 'id' is not there.
      const linkIndex = links.findIndex(({ id }) => id === args.id);
      links[linkIndex] = {
        ...links[linkIndex],
        ...args,
      };

      return links[linkIndex];
    },
  },
};

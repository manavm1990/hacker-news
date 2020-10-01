export default {
  Query: {
    info: () => "Hacker News Clone GraphQL API",
    feed: async (_, __, { prisma }) => prisma.link.findMany(),
    link: async (_, { id }, { prisma }) =>
      prisma.link.findOne({ where: { id } }),
  },

  Mutation: {
    post: (_, { url, description }, { prisma }) => {
      const newLink = prisma.link.create({ data: { url, description } });
      return newLink;
    },
    update: (_, { id, description, url }, { prisma }) =>
      prisma.link.update({ data: { description, url }, where: { id } }),
    delete: (_, { id }, { prisma }) => prisma.link.delete({ where: { id } }),
  },
};

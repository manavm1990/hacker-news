import { getCurrentUserId } from "lib";

export default {
  Query: {
    feed: async (_, __, { prisma: link }) => link.findMany(),
    link: async (_, { id }, { prisma: link }) =>
      link.findOne({ where: { id } }),
  },

  Mutation: {
    post: async (_, { url, description }, { request, prisma: { link } }) =>
      link.create({
        data: {
          url,
          description,
          postedBy: { connect: { id: getCurrentUserId(request) } },
        },
      }),
    update: async (_, { id, description, url }, { prisma: { link } }) =>
      link.update({ data: { description, url }, where: { id } }),
    delete: async (_, { id }, { prisma: { link } }) =>
      link.delete({ where: { id } }),
  },

  Link: {
    postedBy: async (parent, _, { prisma: { link } }) =>
      link.findOne({ where: { id: parent.id } }).postedBy(),
  },
};

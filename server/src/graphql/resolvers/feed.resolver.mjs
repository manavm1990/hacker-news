import { getCurrentUserId } from "lib";

export default {
  Query: {
    feed: async (_, __, { prisma: { link } }) => link.findMany(),
    link: async (_, { id }, { prisma: { link } }) =>
      link.findOne({ where: { id } }),
  },

  Mutation: {
    post: async (
      _,
      { url, description },
      { request, prisma: { link }, pubSub }
    ) => {
      const newLink = link.create({
        data: {
          url,
          description,
          postedBy: { connect: { id: getCurrentUserId(request) } },
        },
      });

      pubSub.publish("NEW_LINK", newLink);

      return newLink;
    },
    update: async (_, { id, description, url }, { prisma: { link } }) =>
      link.update({ data: { description, url }, where: { id } }),
    delete: async (_, { id }, { prisma: { link } }) =>
      link.delete({ where: { id } }),
  },

  Subscription: {
    /**
     * Subscription resolvers are wrapped inside an object and
     * need to be provided as the value for a subscribe field.
     * https://www.howtographql.com/graphql-js/7-subscriptions/
     */
    newLink: {
      subscribe: (_, __, { pubSub }) =>
        /**
         * ...AsyncIterator which subsequently is used by the GraphQL server to push the event
         *  data to the client.
         *  https://www.howtographql.com/graphql-js/7-subscriptions/
         */
        pubSub.asyncIterator("NEW_LINK"),

      /**
       * ...provide another field called resolve that actually returns
       *  the data from the data emitted by the AsyncIterator.
       * https://www.howtographql.com/graphql-js/7-subscriptions/
       */
      resolve: (payload) => payload,
    },
  },

  Link: {
    postedBy: async (parent, _, { prisma: { link } }) =>
      link.findOne({ where: { id: parent.id } }).postedBy(),
  },
};

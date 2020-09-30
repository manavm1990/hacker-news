import { mergeResolvers } from "@graphql-tools/merge";

import feedResolver from "./feed.resolvers";

const resolvers = mergeResolvers([feedResolver]);

export default resolvers;

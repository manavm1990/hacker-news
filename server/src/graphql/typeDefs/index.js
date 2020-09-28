import { mergeTypeDefs } from "@graphql-tools/merge";

import feedType from "./feed.typeDefs.graphql";

const typeDefs = mergeTypeDefs([feedType]);

export default typeDefs;

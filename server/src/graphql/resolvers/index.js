import { mergeResolvers } from "@graphql-tools/merge";

// TODO: Figure out how to use 'loadFilesSync'
import feedResolver from "./feed.resolver";
import infoResolver from "./info.resolver";
import usersResolver from "./users.resolver";

export default mergeResolvers([feedResolver, infoResolver, usersResolver]);

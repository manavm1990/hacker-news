import { mergeResolvers } from "@graphql-tools/merge";

import feedResolver from "./feed.resolver";
import infoResolver from "./info.resolver";
import usersResolver from "./user.resolver";

export default mergeResolvers([feedResolver, infoResolver, usersResolver]);

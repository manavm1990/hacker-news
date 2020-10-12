import { mergeResolvers } from "@graphql-tools/merge";

/**
 * ⚠️ RE: 'loadFilesSync'
 * Only these values are supported now. 'ts', 'js', 'gql', 'graphql', 'graphqls'
 * https://www.graphql-tools.com/docs/merge-resolvers
 */
import linkResolver from "./link.resolvers";
import testResolver from "./test.resolvers";
import usersResolver from "./user.resolvers";

export default mergeResolvers([linkResolver, testResolver, usersResolver]);

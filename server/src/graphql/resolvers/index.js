import path from "path";

import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname), { extensions: ["mjs"] })
);

export default resolvers;

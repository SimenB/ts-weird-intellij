import { QueryResolvers } from "./types";

const Resolver: QueryResolvers = {
  transaction(_, args) {
    return { id: args.id, description: "hello!" };
  }
};

import { GraphQLServer } from "graphql-yoga";
import "./database";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start({ port: 3000 }, ({ port }) => {
  console.log("Server on port:", port);
});

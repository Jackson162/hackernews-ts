import * as fs from "fs";
import * as path from "path";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/resolvers";
import { connectMongodb } from "./config/mongoose";
connectMongodb();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "../schema.graphql"), "utf-8"),
  resolvers,
});

server.listen().then(({ url }) => console.log("server is running on" + url));

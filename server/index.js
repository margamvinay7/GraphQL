import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from './schema/resolvers.js';
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const serverStart = async () => {
  
  mongoose.connect(
    "mongodb+srv://margamvinay:vinay756@vinay.tch0oea.mongodb.net/?retryWrites=true&w=majority",
    { dbName:"graph"}
  ).then(()=>{
    console.log("database connected")
  })
  await server.start();
  server.applyMiddleware({ app });
};

serverStart();



app.listen({ port: 3000 }, () => {
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
});

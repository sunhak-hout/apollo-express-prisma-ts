import { resolvers } from '@resolvers/index';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { app } from './app';
import { context } from './context';
const { PORT } = process.env;

const typeDefs = importSchema('src/schema.graphql');
const server = new ApolloServer({ typeDefs, resolvers, context });
server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`App runing on ${PORT}, ${server.graphqlPath}`),
);

import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { applyMiddleware } from 'graphql-middleware';
import { permissions } from './permissions';
import { resolvers } from './resolvers';
import { context } from './context';

const typeDefs = importSchema('src/schema.graphql');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers as any,
});

const schema = applyMiddleware(executableSchema, permissions);
export const server = new ApolloServer({
  schema,
  context,
  playground: process.env.NODE_ENV !== 'production',
});

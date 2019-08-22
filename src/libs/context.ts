import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export const context = ({ req, res, connection }: ExpressContext) => {
  return {};
};

export interface Context {}

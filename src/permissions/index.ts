import { shield } from 'graphql-shield';
import { ShieldRule } from 'graphql-shield/dist/types';
import { MutationResolvers, QueryResolvers } from '../generated/types';
import { isAuth } from './rules';

export const permissions = shield(
  {
    Query: {} as QueryRules,
    Mutation: {} as MutationRules,
    Ping: {
      fieldA: isAuth,
    },
  },
  {
    allowExternalErrors: true,
  },
);

type QueryRules = { [key in keyof QueryResolvers]?: ShieldRule };

type MutationRules = { [key in keyof MutationResolvers]?: ShieldRule };

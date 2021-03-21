import { QueryResolvers } from '../../generated/types';

export const me: QueryResolvers['me'] = async (root, args, { user }) => {
  return user;
};

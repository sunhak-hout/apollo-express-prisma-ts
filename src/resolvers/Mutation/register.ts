import { MutationResolvers } from '../../generated/types';

export const register: MutationResolvers['register'] = async (
  root,
  { input: { email, password } },
  { services: { userService } },
) => {
  return userService.create({ email, password });
};

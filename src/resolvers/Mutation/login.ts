import { MutationResolvers } from '../../generated/types';

export const login: MutationResolvers['login'] = async (
  root,
  { input: { email, password } },
  { services: { userService } },
) => {
  return userService.loginUser({ email, password });
};

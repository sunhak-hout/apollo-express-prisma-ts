import { MutationResolvers } from '../../generated/types';

export const categoryUpdate: MutationResolvers['categoryUpdate'] = async (
  parent,
  { input },
  { services: { categoryService } },
) => {
  return categoryService.update(input);
};

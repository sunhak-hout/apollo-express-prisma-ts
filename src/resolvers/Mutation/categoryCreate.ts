import { MutationResolvers } from '../../generated/types';

export const categoryCreate: MutationResolvers['categoryCreate'] = async (
  parent,
  { input },
  { services: { categoryService } },
) => {
  return categoryService.create(input);
};

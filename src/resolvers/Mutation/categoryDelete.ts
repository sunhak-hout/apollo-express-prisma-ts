import { MutationResolvers } from '../../generated/types';

export const categoryDelete: MutationResolvers['categoryDelete'] = async (
  parent,
  { id },
  { services: { categoryService } },
) => {
  return categoryService.delete(id);
};

import { QueryResolvers } from '../../generated/types';

export const categoryPagination: QueryResolvers['categoryPagination'] = async (
  parent,
  args,
  { services: { categoryService } },
) => {
  const [items, count] = await Promise.all([
    categoryService.findAll() as any,
    categoryService.count(),
  ]);
  return { items, count };
};

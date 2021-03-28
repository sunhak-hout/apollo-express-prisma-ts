import { CategoryResolvers } from '../generated/types';

export const Category: CategoryResolvers = {
  parent: ({ id }, args, { dataloaders: { categoryLoader } }) => categoryLoader.parent.load(id),
  children: ({ id }, args, { dataloaders: { categoryLoader } }) => categoryLoader.children.load(id),
};

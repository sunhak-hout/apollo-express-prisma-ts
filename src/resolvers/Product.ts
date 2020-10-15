import { categoryListMock } from '../datasources/categoryList.mock';
import { shopListMock } from '../datasources/shopList.mock';

export const Product = {
  shop: (parent: any) => {
    return shopListMock.find((s) => s.id === parent.shopId);
  },

  categories: (parent: any) => {
    return categoryListMock.filter((c) => parent.categoryIds.includes(c.id));
  },
};

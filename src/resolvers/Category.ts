import { productListMock } from '../datasources/productList.mock';

export const Category = {
  products: (parent: any) => {
    return productListMock.filter((p) => p.categoryIds.includes(parent.id));
  },
};

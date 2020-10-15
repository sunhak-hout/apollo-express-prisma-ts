import { productListMock } from '../datasources/productList.mock';

export const Shop = {
  products: (parent: any) => {
    return productListMock.filter((p) => p.shopId === parent.id);
  },
};

import { productListMock } from '../../datasources/productList.mock';

export const productList = (parent: any, { limit = 20, offset = 0 }: any) => {
  let products = productListMock;
  if (limit) products = productListMock.slice(0, limit);
  if (offset) products = productListMock.slice(offset, limit + offset);
  return products;
};

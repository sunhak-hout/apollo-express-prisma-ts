import { productListMock } from '../../datasources/productList.mock';

export const deleteProduct = (parent: any, { id }: any) => {
  const product = productListMock.find((p) => p.id === id);
  // TODO: login goes here...
  return product;
};

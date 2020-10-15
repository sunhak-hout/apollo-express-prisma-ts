import { productListMock } from '../../datasources/productList.mock';

export const createProduct = (parent: any, { input }: any) => {
  const product = {
    id: productListMock.length + 2,
    name: input.name,
    description: input.description,
    discount: input.discount,
    price: input.price,
    shopId: input.shopId,
    categoryIds: input.categoryIds,
  };

  // TODO: logic goes here...

  return product;
};

import { shopListMock } from '../../datasources/shopList.mock';

export const shopList = (parent: any, { limit = 20, offset = 0 }: any) => {
  let shops = shopListMock;
  if (limit) shops = shopListMock.slice(0, limit);
  if (offset) shops = shopListMock.slice(offset, limit + offset);
  return shops;
};

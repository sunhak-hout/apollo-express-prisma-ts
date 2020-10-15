
interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  description?: string;
  shopId: number;
  categoryIds: number[];
}

export const productListMock: Product[] = [
  {
    id: 1,
    name: 'Jasmine Green Tea',
    price: 1.4,
    discount: 0.0,
    shopId: 1,
    categoryIds: [2],
  },
  {
    id: 2,
    name: 'Honey Milk Tea',
    price: 2.0,
    discount: 0.0,
    shopId: 1,
    categoryIds: [2],
  },
  {
    id: 3,
    name: 'Green Milk Tea',
    price: 1.8,
    discount: 0.0,
    shopId: 1,
    categoryIds: [2],
  },
  {
    id: 4,
    name: 'Caramel Milk Tea',
    price: 1.8,
    discount: 0.0,
    shopId: 1,
    categoryIds: [2],
  },
  {
    id: 5,
    name: 'Brown Sugar Milk Tea',
    price: 2.0,
    discount: 0.0,
    shopId: 1,
    categoryIds: [2],
  },

  {
    id: 6,
    name: 'BBQ Chicken',
    price: 4.1,
    discount: 0.0,
    shopId: 2,
    categoryIds: [1],
  },
  {
    id: 7,
    name: 'Double Cheese Pan Pizza',
    price: 4.9,
    discount: 0.0,
    shopId: 2,
    categoryIds: [1],
  },
  {
    id: 8,
    name: 'Meat Deluze Pan Pizza',
    price: 5.9,
    discount: 0.0,
    shopId: 2,
    categoryIds: [1],
  },

  {
    id: 9,
    name: 'Shrimp Burger',
    price: 4.85,
    discount: 0.0,
    shopId: 3,
    categoryIds: [1],
  },
  {
    id: 10,
    name: 'BBQ Cheeseburger',
    price: 3.95,
    discount: 0.0,
    shopId: 3,
    categoryIds: [1],
  },
  {
    id: 11,
    name: 'Single Mushrooms Swiss',
    price: 3.95,
    discount: 0.0,
    shopId: 3,
    categoryIds: [1],
  },
  {
    id: 11,
    name: 'Ice Cream Cone',
    price: 1.75,
    discount: 0.0,
    shopId: 3,
    categoryIds: [1, 3],
  },
];

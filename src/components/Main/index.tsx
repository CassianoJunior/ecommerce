import { Flex } from '@chakra-ui/react';
import React from 'react';
import Product, { IProduct } from '../Product/index';

const products = [
  {
    name: 'Headphone',
    price: 34.9,
    category: 'Smartphones and accessory',
    thumb: '/fone.png',
  },
  {
    name: 'Headphones 2',
    price: 54.9,
    category: 'Smartphones and accessories',
    thumb: '/fone.png',
  },
  {
    name: 'Shirt',
    price: 30,
    category: 'Clothes',
    thumb: '/camisa.png',
  },
];

const Main: React.FC = () => (
  <Flex>
    {products.map(({ name, category, price, thumb }: IProduct) => (
      <Product
        name={name}
        category={category}
        price={price}
        thumb={thumb}
        key={name}
      />
    ))}
  </Flex>
);

export default Main;

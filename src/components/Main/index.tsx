import React from 'react';

import { Flex } from '@chakra-ui/react';

import Product, { IProduct } from '../Product';

const products = [
  {
    name: 'Headphone',
    price: 34.9,
    category: 'Smartphones and accessory',
    thumb: '/fone.jpg',
  },
  {
    name: 'Headphones 2',
    price: 54.9,
    category: 'Smartphones and accessories',
    thumb: '/fone.jpg',
  },
  {
    name: 'Shirt',
    price: 30,
    category: 'Clothes',
    thumb: '/camisa.jpg',
  },
  {
    name: 'Headphone',
    price: 34.9,
    category: 'Smartphones and accessory',
    thumb: '/fone.jpg',
  },
  {
    name: 'Headphones 2',
    price: 54.9,
    category: 'Smartphones and accessories',
    thumb: '/fone.jpg',
  },
  {
    name: 'Shirt',
    price: 30,
    category: 'Clothes',
    thumb: '/camisa.jpg',
  },
];

const Main: React.FC = () => (
  <Flex wrap='wrap' m='auto' justify='center' overflow='scroll' my={20}>
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

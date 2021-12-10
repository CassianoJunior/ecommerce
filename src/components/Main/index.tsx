import React from 'react';

import { Flex } from '@chakra-ui/react';

import Product, { IProduct } from '../Product';

import products from '../../data/fakeProducts.json';

const Main: React.FC = () => (
  <Flex wrap='wrap' m='auto' justify='center' overflow='scroll' my={20}>
    {products.map(({ id, name, category, price, thumb }: IProduct) => (
      <Product
        id={id}
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

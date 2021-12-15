import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Product as ProductType } from 'chec__commerce.js/types/product';
import Product from '../Product';

interface IMainComponentProps {
  products: ProductType[];
}

const Main: React.FC<IMainComponentProps> = ({ products }) => (
  <Flex wrap='wrap' m='auto' justify='center' overflow='scroll' my={20}>
    {products.map(product => (
      <Product product={product} key={product.id} />
    ))}
  </Flex>
);
export default Main;

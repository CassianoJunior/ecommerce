/* eslint-disable object-curly-newline */
import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';
import { Product as ProductType } from 'chec__commerce.js/types/product';
import Product from '../Product/index';

interface IRelatedProductsProps {
  products: ProductType[];
}

const RelatedProducts: React.FC<IRelatedProductsProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <Flex flexDir='column'>
      <Heading size='md'>Some other things you might like</Heading>
      <Flex>
        {products.map(product => (
          <Product product={product} key={product.id} related />
        ))}
      </Flex>
    </Flex>
  );
};
export default RelatedProducts;

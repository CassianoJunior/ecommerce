import React from 'react';

import { Flex } from '@chakra-ui/react';
import { LineItem } from '@chec/commerce.js/types/line-item';
import Cartitem from '../CartItem';

interface ICartComponentProps {
  cartItems: LineItem[];
}

const Cart: React.FC<ICartComponentProps> = ({ cartItems }) => (
  <Flex
    flexDir='column'
    border='1px solid'
    borderRadius='10px'
    w='100%'
    maxW='360px'
    m='0 auto'
    px={4}
  >
    {cartItems.map(item => (
      <Cartitem item={item} key={item.id} />
    ))}
  </Flex>
);

export default Cart;

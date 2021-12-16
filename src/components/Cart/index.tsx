import React from 'react';

import { Flex } from '@chakra-ui/react';
import { LineItem } from '@chec/commerce.js/types/line-item';
import Cartitem from '../CartItem';

interface ICartComponentProps {
  cartItems: LineItem[];
}

const Cart: React.FC<ICartComponentProps> = ({ cartItems }) => (
  <Flex>
    {cartItems.map(item => (
      <Cartitem item={item} key={item.id} />
    ))}
  </Flex>
);

export default Cart;

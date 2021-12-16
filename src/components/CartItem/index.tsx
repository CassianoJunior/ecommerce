import React from 'react';

import { Flex, Heading, Button } from '@chakra-ui/react';
import { LineItem } from '@chec/commerce.js/types/line-item';
import { useCartDispatchContext } from '../../contexts/CartContext';
import commerce from '../../config/commerce';

interface ICartItemComponentProps {
  item: LineItem;
}

const Cartitem: React.FC<ICartItemComponentProps> = ({ item }) => {
  const { resetCart } = useCartDispatchContext();

  return (
    <Flex>
      <Heading size='md'>{item.name}</Heading>
      <Button
        onClick={() => {
          commerce.cart.update(item.id, { quantity: 0 });
          resetCart();
        }}
      >
        reset
      </Button>
    </Flex>
  );
};

export default Cartitem;

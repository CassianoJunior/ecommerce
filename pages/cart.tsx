import { NextPage } from 'next';

import { Flex, Heading } from '@chakra-ui/react';

import Header from '../src/components/Header';
import Cart from '../src/components/Cart';

import { useCartStateContext } from '../src/contexts/CartContext';

// export const getStaticProps: GetStaticProps = async () => {

//   return {
//     props
//   }
// }

const CartPage: NextPage = () => {
  const { line_items: lineItems } = useCartStateContext();

  return (
    <>
      <Header />
      <Flex my={20} flexDir='column'>
        <Heading>My Cart</Heading>
        <Cart cartItems={lineItems} />
      </Flex>
    </>
  );
};
export default CartPage;

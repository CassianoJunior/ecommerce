/* eslint-disable object-curly-newline */
import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Flex, Heading, Text, Button } from '@chakra-ui/react';

import Header from '../src/components/Header';
import Cart from '../src/components/Cart';

import { Subtotal, useCartStateContext } from '../src/contexts/CartContext';

// export const getStaticProps: GetStaticProps = async () => {

//   return {
//     props
//   }
// }

interface ICheckoutButtonComponentProps {
  subtotal: Subtotal;
}

const CheckoutButton: React.FC<ICheckoutButtonComponentProps> = ({
  subtotal,
}) => (
  <Flex w='100%' pos='fixed' bottom={2}>
    <Button
      bgColor='highlight'
      w='95%'
      m='auto'
      py={4}
      zIndex={10}
      borderRadius='full'
    >
      <Text fontSize='lg' fontWeight='bold'>
        {`Checkout: ${subtotal.formatted_with_symbol}`}
      </Text>
    </Button>
  </Flex>
);

const CartPage: NextPage = () => {
  const {
    line_items: lineItems,
    total_items: totalItems,
    subtotal,
  } = useCartStateContext();

  return totalItems !== 0 ? (
    <>
      <Header />
      <Flex my={20} flexDir='column' maxW='390px' w='100%' mx='auto'>
        <Heading mb={3}>My Cart</Heading>
        <Cart cartItems={lineItems} />
      </Flex>
      <CheckoutButton subtotal={subtotal} />
    </>
  ) : (
    <>
      <Header />
      <Flex my={20} flexDir='column' maxW='390px' w='100%' mx='auto'>
        <Heading mb={3}>My Cart</Heading>
        <Flex flexDir='column' align='center' justify='center'>
          <Heading mb={4} size='md'>
            Your cart is empty, add some items!
          </Heading>
          <Link href='/' passHref>
            <Button bgColor='highlight'>Go to home</Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
export default CartPage;

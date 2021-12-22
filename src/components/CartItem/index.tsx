/* eslint-disable object-curly-newline */
import React from 'react';
import Image from 'next/image';

import { LineItem } from '@chec/commerce.js/types/line-item';

import {
  Flex,
  Text,
  Box,
  Divider,
  IconButton,
  CloseButton,
  useToast,
} from '@chakra-ui/react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useCartDispatchContext } from '../../contexts/CartContext';
import commerce from '../../config/commerce';
import styles from './cartitem.module.css';

interface ICartItemComponentProps {
  item: LineItem;
}

const Cartitem: React.FC<ICartItemComponentProps> = ({ item }) => {
  const { setCart } = useCartDispatchContext();
  const toast = useToast();

  return (
    <>
      <Flex my={5} pos='relative'>
        <Box w='95px' h='95px'>
          <Image
            src={item.image?.url || ''}
            alt={item.name}
            width='90px'
            height='90px'
            className={styles.image}
          />
        </Box>
        <Flex flexDir='column' justify='space-between' w='100%' maxW='240px'>
          <Text p={2}>{item.name}</Text>
          <Box>
            <Flex justify='space-between' w='90%' m='0 auto' align='center'>
              <Text>{item.price.formatted_with_symbol}</Text>
              <Flex align='center' justify='center'>
                <IconButton
                  aria-label='minus'
                  icon={<AiOutlineMinus />}
                  isRound
                  size='xs'
                  bgColor='highlight'
                  _hover={{ background: 'transparent' }}
                  onClick={async e => {
                    e.preventDefault();
                    const { cart } = await commerce.cart.update(item.id, {
                      quantity: item.quantity - 1,
                    });
                    await setCart(cart);
                    toast({
                      description: `One"${item.name}" has been removed from your
                      cart. Total subitem: R$${(
                        item.line_total.raw - item.price.raw
                      ).toFixed(2)}.`,
                      status: 'success',
                      duration: 2000,
                      isClosable: true,
                    });
                  }}
                />
                <Text px={2}>{item.quantity}</Text>
                <IconButton
                  aria-label='plus'
                  icon={<AiOutlinePlus />}
                  isRound
                  size='xs'
                  bgColor='highlight'
                  _hover={{ background: 'transparent' }}
                  onClick={async e => {
                    e.preventDefault();

                    const { cart } = await commerce.cart.update(item.id, {
                      quantity: item.quantity + 1,
                    });
                    await setCart(cart);
                    toast({
                      description: `One"${item.name}" has been added to your
                      cart. Total subitem: R$${(
                        item.line_total.raw + item.price.raw
                      ).toFixed(2)}.`,
                      status: 'success',
                      duration: 2000,
                      isClosable: true,
                    });
                  }}
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <CloseButton
          pos='absolute'
          top={-2}
          right={-2}
          onClick={async () => {
            const { cart } = await commerce.cart.update(item.id, {
              quantity: 0,
            });
            setCart(cart);
            toast({
              description: `"${item.name}" has been removed from your cart.`,
              status: 'success',
              duration: 2000,
              isClosable: true,
            });
          }}
        />
      </Flex>
      <Text>
        Subtotal item:
        <Text fontWeight='bold'>{item.line_total.formatted_with_symbol}</Text>
      </Text>

      <Divider />
    </>
  );
};

export default Cartitem;

import React from 'react';

import {
  Flex,
  Button,
  Icon,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavorite, MdOutlineAccountCircle } from 'react-icons/md';

const Toolbar: React.FC = () => (
  <Flex
    bottom={0}
    position='fixed'
    w='100%'
    bgColor={useColorModeValue('background', 'contrast')}
    py={2}
    borderTopEndRadius={25}
    borderTopStartRadius={25}
  >
    <Button
      width='100%'
      display='flex'
      align='center'
      justify='center'
      bg='trasparent'
      _hover={{ background: 'trasparent' }}
    >
      <Icon as={MdOutlineAccountCircle} color='highlight' w={8} h={8} />
    </Button>
    <Spacer />
    <Button
      width='100%'
      display='flex'
      align='center'
      justify='center'
      bg='trasparent'
      _hover={{ background: 'trasparent' }}
    >
      <Icon as={AiOutlineShoppingCart} color='highlight' w={8} h={8} />
    </Button>
    <Spacer />
    <Button
      width='100%'
      display='flex'
      align='center'
      justify='center'
      bg='trasparent'
      _hover={{ background: 'trasparent' }}
    >
      <Icon as={MdFavorite} color='highlight' w={8} h={8} />
    </Button>
  </Flex>
);

export default Toolbar;

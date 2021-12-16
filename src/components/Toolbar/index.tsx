import React from 'react';

import {
  Flex,
  Button,
  Icon,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

import { MdFavorite, MdOutlineAccountCircle } from 'react-icons/md';

import Link from 'next/link';
// import { useRouter } from 'next/router';
import IconWithBadge from '../IconWithBadge';
import { useCartStateContext } from '../../contexts/CartContext';

const Toolbar: React.FC = () => {
  // const router = useRouter();
  const { total_items: totalItems } = useCartStateContext();

  return (
    <Flex
      bottom={0}
      position='fixed'
      w='100%'
      bgColor={useColorModeValue('background', 'contrast')}
      py={2}
      borderTopEndRadius={25}
      borderTopStartRadius={25}
      zIndex={10}
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
      <Link href='/cart' passHref>
        <Button
          width='100%'
          display='flex'
          align='center'
          justify='center'
          bg='trasparent'
          _hover={{ background: 'trasparent' }}
        >
          <IconWithBadge quantity={totalItems} />
        </Button>
      </Link>
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
};

export default Toolbar;

import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useRouter } from 'next/router';
import styles from './product.module.css';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  thumb: string;
  description?: string;
}

const Product: React.FC<IProduct> = ({
  id,
  name,
  price,
  category,
  thumb,
}: IProduct) => {
  const router = useRouter();

  const isFavorited = false;

  return (
    <Flex
      flexDir='column'
      border='1px solid'
      borderColor={useColorModeValue('background', 'contrast')}
      borderRadius={10}
      py={2}
      px={3}
      m={2}
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      <Box borderRadius={10} pos='relative'>
        <Image
          src={thumb}
          alt={name}
          width='300px'
          height='300px'
          className={styles.image}
        />
        <Button bottom={2} right={1} p={0} pos='absolute' bgColor='transparent'>
          <Icon
            as={isFavorited ? MdFavorite : MdOutlineFavoriteBorder}
            w={6}
            h={6}
            color='highlight'
          />
        </Button>
      </Box>
      <Box my={2}>
        <Text>
          <Link href='/'>{name}</Link>
        </Text>
        <Text fontSize='sm'>{category}</Text>
        <Text fontWeight='bold'>{`R$ ${price.toFixed(2)}`}</Text>
      </Box>
    </Flex>
  );
};

export default Product;

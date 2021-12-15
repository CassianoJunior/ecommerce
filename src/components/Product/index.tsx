import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Icon,
  Link,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import NextLink from 'next/link';
import { Product as ProductType } from 'chec__commerce.js/types/product';
import styles from './product.module.css';

interface IProductComponentProps {
  product: ProductType;
  // eslint-disable-next-line react/require-default-props
  related?: boolean;
}

const Product: React.FC<IProductComponentProps> = ({ product, related }) => {
  const { name } = product;
  const price = product.price.formatted_with_symbol;
  const img = product.image && product.image.url;
  const category =
    product.categories && product.categories[0] && product.categories[0].name;

  const isFavorited = false;

  return (
    <NextLink href={`/products/${product.permalink}`}>
      <Flex
        flexDir='column'
        border='1px solid'
        borderColor={useColorModeValue('background', 'contrast')}
        borderRadius={10}
        py={2}
        px={3}
        maxW={related ? '150px' : '320px'}
        m={2}
      >
        <Box borderRadius={10}>
          <Image
            src={img || ''}
            alt={name}
            width='300px'
            height='300px'
            className={styles.image}
          />
        </Box>
        <Box my={2}>
          <Flex justify='space-between' align='center'>
            <Text>
              <Link href={`/products/${product.permalink}`}>
                {related ? (
                  <Tooltip aria-label='tip' label={name}>
                    {`${name.substring(0, 15)} ...`}
                  </Tooltip>
                ) : (
                  name
                )}
              </Link>
            </Text>
            <Button bgColor='transparent'>
              <Icon
                as={isFavorited ? MdFavorite : MdOutlineFavoriteBorder}
                w={6}
                h={6}
                color='highlight'
              />
            </Button>
          </Flex>
          <Text fontSize='sm'>{category}</Text>
          <Text fontWeight='bold'>{price}</Text>
        </Box>
      </Flex>
    </NextLink>
  );
};

export default Product;

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  useColorModeValue,
  Icon,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from '@chakra-ui/react';

import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Header from '../../src/components/Header';
import { IProduct } from '../../src/components/Product/index';
import Toolbar from '../../src/components/Toolbar';

import products from '../../src/data/fakeProducts.json';
import styles from '../../src/components/Product/product.module.css';

const ProductPage: NextPage = () => {
  const router = useRouter();

  const getData = (id: number): IProduct | undefined => {
    let match;
    products.forEach(product => {
      if (product.id === id) {
        match = product;
      }
    });

    return match;
  };

  const product = getData(Number(router.query.productId));

  const isFavorited = false;

  return product ? (
    <>
      <Header />
      <Flex
        flexDir='column'
        maxW={['370px']}
        py={2}
        mx='auto'
        my={20}
        align='center'
        justify='center'
      >
        <Flex w='100%'>
          <Box>
            <Heading as='h1' size='md' textAlign='justify' maxW={['250px']}>
              {product?.name}
            </Heading>
            <Text>{product?.category}</Text>
          </Box>
          <Spacer />
          <Button bgColor='transparent' _hover={{ backgroundColor: 'none' }}>
            <Icon
              as={isFavorited ? MdFavorite : MdOutlineFavoriteBorder}
              w={6}
              h={6}
              color='highlight'
            />
          </Button>
          <Button bgColor='transparent' _hover={{ backgroundColor: 'none' }}>
            <Icon as={AiOutlineShoppingCart} w={6} h={6} color='highlight' />
          </Button>
        </Flex>
        <Box p={1} m={2}>
          <Image
            src={product?.thumb}
            width='300px'
            height='300px'
            alt={product.name}
            className={styles.image}
          />
        </Box>
        <Flex width='80%' my={2} justify='space-between' align='center'>
          <Text fontWeight='bold' fontSize='xl'>
            {`R$ ${product.price.toFixed(2)}`}
          </Text>
          <Button
            color='highlight'
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bgColor={useColorModeValue('background', 'contrast')}
            _hover={{ backgroundColor: 'none' }}
          >
            Comprar
          </Button>
        </Flex>
        <Flex my={4} w='100%'>
          <Accordion allowMultiple w='100%'>
            <AccordionItem>
              <Text w='100%'>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Technical specifications
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel>{product?.description}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
      <Toolbar />
    </>
  ) : (
    <Heading>Produto nao encontrado</Heading>
  );
};

export default ProductPage;

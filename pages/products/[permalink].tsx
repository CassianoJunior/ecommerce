/* eslint-disable object-curly-newline */
import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
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
  IconButton,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from '@chakra-ui/react';

import { Product } from 'chec__commerce.js/types/product';
import { ParsedUrlQuery } from 'querystring';

import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoChevronBackOutline } from 'react-icons/io5';

import Header from '../../src/components/Header';
import Toolbar from '../../src/components/Toolbar';
import styles from '../../src/components/Product/product.module.css';
import commerce from '../../src/config/commerce';
import RelatedProducts from '../../src/components/RelatedProducts';

interface IParams extends ParsedUrlQuery {
  permalink: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { permalink } = params as IParams;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await commerce.products.list();

  const paths = products.map(({ permalink }) => ({
    params: { permalink },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IProductPageProps {
  product: Product;
}

const ProductPage: NextPage<IProductPageProps> = ({ product }) => {
  const router = useRouter();

  const isFavorited = false;

  if (product) {
    const { description, name } = product;
    const price = product.price.formatted_with_symbol;
    const img = product.image && product.image.url;
    const category =
      product.categories && product.categories[0] && product.categories[0].name;

    const formatDescription = (des: string) => {
      const withwoutStartTags = des.replace(/[<][p][>]/gi, '');
      return withwoutStartTags.replace(/[<][/][p][>]/gi, '\n');
    };

    return (
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
          pos='relative'
        >
          <IconButton
            aria-label='back'
            icon={<IoChevronBackOutline />}
            size='sm'
            pos='absolute'
            top={-5}
            left={-2}
            bg='trasparent'
            _hover={{ backgroundColor: 'none' }}
            onClick={() => {
              router.push('/');
            }}
          />
          <Flex w='90%'>
            <Box>
              <Heading as='h1' size='md' textAlign='justify' maxW={['250px']}>
                {name}
              </Heading>
              <Text>{category}</Text>
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
          </Flex>
          <Box p={1} m={2}>
            <Image
              src={img || ''}
              width='300px'
              height='300px'
              alt={name}
              className={styles.image}
            />
          </Box>
          <Flex width='80%' my={2} justify='space-between' align='center'>
            <Text fontWeight='bold' fontSize='xl'>
              {price}
            </Text>
            <Button
              color='highlight'
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bgColor={useColorModeValue('background', 'contrast')}
              _hover={{ backgroundColor: 'none' }}
            >
              Add to cart
            </Button>
          </Flex>
          <Flex my={4} w='90%'>
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
                <AccordionPanel>
                  {formatDescription(description)}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Flex>
            <RelatedProducts products={product.related_products} />
          </Flex>
        </Flex>
        <Toolbar />
      </>
    );
  }
  return (
    <Flex align='center' justify='center' flexDir='column' h='100vh'>
      <Heading>Produto nao encontrado...</Heading>
      <Button
        bgColor='highlight'
        onClick={() => {
          router.push('/');
        }}
      >
        Back to home
      </Button>
    </Flex>
  );
};

export default ProductPage;

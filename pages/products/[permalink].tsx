/* eslint-disable object-curly-newline */
import React, { useState } from 'react';

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
  useToast,
  HStack,
  Tag,
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
import { useCartDispatchContext } from '../../src/contexts/CartContext';

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
    fallback: true,
  };
};

interface IProductPageProps {
  product: Product;
}

const ProductPage: NextPage<IProductPageProps> = ({ product }) => {
  const router = useRouter();
  const { setCart } = useCartDispatchContext();
  const toast = useToast();

  const isFavorited = false;

  const {
    description,
    name,
    id,
    variant_groups: variantGroups,
    assets,
  } = product;

  const [
    { url: urlDefault },
    { url: greenUrl },
    { url: yellowUrl },
    { url: blackUrl },
    { url: whiteUrl },
    { url: blueUrl },
    { url: pinkUrl },
  ] = assets;

  const price = product.price.formatted_with_symbol;
  const img = product.image && product.image.url;
  const category =
    product.categories && product.categories[0] && product.categories[0].name;

  const [imageSelected, setImageSelected] = useState(img);

  const formatDescription = (des: string) => {
    const withwoutStartTags = des.replace(/[<][p][>]/gi, '');
    return withwoutStartTags.replace(/[<][/][p][>]/gi, '\n');
  };

  const addToCart = async (productId: string) => {
    const { cart } = await commerce.cart.add(productId, 1);

    setCart(cart);
  };

  const handleImage = (variantName: string) => {
    switch (variantName) {
      case 'Pink':
        setImageSelected(pinkUrl);
        break;
      case 'Blue':
        setImageSelected(blueUrl);
        break;
      case 'Black':
        setImageSelected(blackUrl);
        break;
      case 'White':
        setImageSelected(whiteUrl);
        break;
      case 'Green':
        setImageSelected(greenUrl);
        break;
      case 'Yellow':
        setImageSelected(yellowUrl);
        break;
      default:
        setImageSelected(urlDefault);
    }
  };

  const handleVariant = (variantId: string) => {
    variantGroups[0].options.forEach(variant => {
      if (variantId === variant.id) {
        const tag = document.getElementById(variant.id);
        if (tag) tag.style.backgroundColor = '#9F7AEA';

        handleImage(variant.name);
      } else {
        const tag = document.getElementById(variant.id);
        if (tag) tag.style.backgroundColor = '#e2e8f020';
      }
    });
  };

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
            router.back();
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
            src={imageSelected || ''}
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
            onClick={async e => {
              e.preventDefault();
              await addToCart(id);
              toast({
                description: `"${name}" as been added on your cart`,
                status: 'success',
                duration: 2000,
                isClosable: true,
              });
            }}
          >
            Add to cart
          </Button>
        </Flex>
        {variantGroups[0] && (
          <Flex flexDir='column'>
            <Text>{`Select ${variantGroups[0].name}`}</Text>
            <HStack wrap='wrap'>
              {variantGroups[0].options.map(opt => (
                <Tag
                  key={opt.id}
                  id={opt.id}
                  onClick={e => {
                    e.preventDefault();
                    handleVariant(opt.id);
                  }}
                >
                  {opt.name}
                </Tag>
              ))}
            </HStack>
          </Flex>
        )}
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
              <AccordionPanel>{formatDescription(description)}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex>
          <RelatedProducts products={product.related_products} />
        </Flex>
      </Flex>
      <Toolbar />
    </>
  ) : (
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

import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export interface IProduct {
  name: string;
  price: number;
  category: string;
  thumb: string;
}

const Product = ({ name, price, category, thumb }: IProduct) => (
  <Flex
    flexDir='column'
    border='1px solid'
    borderColor={useColorModeValue('background', 'contrast')}
    borderRadius={10}
    py={2}
    px={3}
    m={2}
  >
    {/* <Image src={thumb} alt={name} width='100px' height='100px' /> */}
    <Box bgColor='blue.200' width='300px' height='300px' borderRadius={10} />
    <Box my={2}>
      <Text>{name}</Text>
      <Text fontSize='sm'>{category}</Text>
      <Text fontWeight='bold'>{`R$ ${price}`}</Text>
    </Box>
  </Flex>
);

export default Product;

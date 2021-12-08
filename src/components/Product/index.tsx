import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface IProduct {
  name: string;
  price: number;
  category: string;
  thumb: string;
}

const Product = ({ name, price, category, thumb }: IProduct) => (
  <Flex flexDir='column'>
    {/* <Image src={thumb} alt={name} width='100px' height='100px' /> */}
    <img src='fone.jpg' alt={name} />
    <Box>
      <Text>{name}</Text>
      <Text fontSize='xs'>{category}</Text>
      <Text fontSize='sm' fontWeight='bold'>{`R$ ${price}`}</Text>
    </Box>
  </Flex>
);

export default Product;

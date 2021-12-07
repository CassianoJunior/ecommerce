import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface IProduct{
  name: string,
  price: number,
  category: string,
  thumb: string
}

const Product = ({ name, price, category, thumb }: IProduct) => (
  <Flex>
    <Image src={thumb} alt={name} width='30px' height='30px' />
    <Box>
      <Text>{name}</Text>
      <Text fontSize='sm'>{category}</Text>
      <Text fontWeight='bold'>{`R$ ${price}`}</Text>
    </Box>
  </Flex>
);

export default Product;

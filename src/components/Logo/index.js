import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { darken } from '@chakra-ui/theme-tools';

const Logo = () => (
  <Flex align='center' justify='center'>
    <Heading
      size='lg'
      p={2}
      color={useColorModeValue(darken('complementary', 20), 'complementary')}
    >
      Startech
    </Heading>
  </Flex>
);

export default Logo;

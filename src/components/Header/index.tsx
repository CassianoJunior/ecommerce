import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Header: React.FC = () => {
  const screenWidth = true;

  return (
    <Flex
      bgColor='background'
      align='center'
      justify='center'
      pos='fixed'
      w='100%'
      top={0}
      zIndex={10}
    >
      {screenWidth ? <Sidebar /> : <Navbar />}
    </Flex>
  );
};

export default Header;

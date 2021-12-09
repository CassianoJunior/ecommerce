import type { NextPage } from 'next';
// import { useState, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';
import Main from '../components/Main';

const Home: NextPage = () => (
  <>
    <Flex
      bgColor='background'
      align='center'
      justify='center'
      pos='fixed'
      w='100%'
      top={0}
    >
      <Sidebar />
    </Flex>
    <Main />
    <Toolbar />
  </>
);
export default Home;

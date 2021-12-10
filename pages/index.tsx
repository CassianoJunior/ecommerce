import type { NextPage } from 'next';
// import { useState, useEffect } from 'react';

import Toolbar from '../src/components/Toolbar';
import Main from '../src/components/Main';
import Header from '../src/components/Header';

const Home: NextPage = () => (
  <>
    <Header />
    <Main />
    <Toolbar />
  </>
);
export default Home;

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../src/styles/theme';
import CartProvider from '../src/contexts/CartContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  </ChakraProvider>
);

export default MyApp;

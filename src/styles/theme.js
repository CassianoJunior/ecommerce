import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    highlight: '#9F7AEA',
    background: '#171923',
    contrast: '#E2E8F0',
    complementary: '#FAF089',
  },
};

const theme = extendTheme(config);

export default theme;

import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    highlight: '#44337A',
    background: '#171923',
    contrast: '#E2E8F0',
    complementary: '#90CDF4',
  },
};

const theme = extendTheme(config);

export default theme;

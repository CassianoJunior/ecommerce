import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='toggleTheme'
      onClick={toggleColorMode}
      isRound
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      size='sm'
      bgColor='complementary'
      color='background'
    />
  );
};

export default ToggleTheme;

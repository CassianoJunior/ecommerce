import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      isRound='true'
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      size='sm'
    />
  );
};

export default ToggleTheme;

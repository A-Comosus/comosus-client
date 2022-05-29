import React from 'react';
import { useColorMode } from '@chakra-ui/react';

import { IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleThemeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const getIcon = () => (colorMode === 'light' ? <FaSun /> : <FaMoon />);

  return (
    <IconButton
      aria-label="toggle theme"
      onClick={toggleColorMode}
      icon={getIcon()}
    />
  );
};

export default ToggleThemeButton;

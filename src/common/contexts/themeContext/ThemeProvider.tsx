import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  theme as chakraCreatedTheme,
} from '@chakra-ui/react';

import '@fontsource/montserrat';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

type ThemeContextType = {};
const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType,
);
export const useTheme = () => React.useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
};
export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const chakraTheme = {
    fonts: {
      body: 'Montserrat, sans-serif',
    },
    config: {
      initialColorMode: 'system',
    },
  };

  return (
    <ThemeContext.Provider value={{}}>
      <ChakraProvider resetCSS={true} theme={extendTheme(chakraTheme)}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

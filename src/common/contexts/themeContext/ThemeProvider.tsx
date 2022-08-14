import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/black-han-sans';
import '@fontsource/montserrat';
import '@fontsource/nanum-brush-script';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const chakraTheme = {
    styles: {
      global: {
        'html, body': {
          fontSize: '62.5%',
          background: '#1B181E',
        },
      },
    },
    fonts: {
      heading: `'black han sans', sans-serif`,
      body: `'Montserrat', sans-serif`,
    },
    config: {
      initialColorMode: 'light',
    },
  };
  return (
    <ChakraProvider resetCSS={true} theme={extendTheme(chakraTheme)}>
      {children}
    </ChakraProvider>
  );
};

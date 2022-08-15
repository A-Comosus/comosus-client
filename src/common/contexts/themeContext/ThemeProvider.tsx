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
          color: '#F8F5F1',
        },
        p: {
          fontSize: '1.6rem',
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = {
  font: {
    light: '#F8F5F1',
    dark: '#3B3C46',
    disabled: '#A2A7AE',
    label: '#ADB2C6',
    placeholder: '#4F4F58',
  },
};

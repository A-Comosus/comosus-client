import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyle from './global';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}
type ThemeContext = { themeMode?: any; toggleTheme: () => void };
type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext,
);

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState(Theme.Light);

  const toggleTheme = () => {
    themeMode === Theme.Light
      ? setThemeMode(Theme.Dark)
      : setThemeMode(Theme.Light);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode === Theme.Dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

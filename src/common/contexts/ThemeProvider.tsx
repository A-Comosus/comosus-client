import React, { useState, useContext } from 'react';

type Theme = 'light' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };
type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext,
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const color = theme === 'light' ? '#000' : '#fff';
  const backgroundColor = theme === 'light' ? '#fff' : '#000';

  if (typeof document !== 'undefined') {
    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
};

import React, { useContext } from 'react';
import { Theme, ThemeContext } from '@src/common/contexts';

const ToggleThemeButton: React.FC = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {themeMode === Theme.Light ? Theme.Dark : Theme.Light} mode
      </button>
    </div>
  );
};

export default ToggleThemeButton;

import React from 'react';
import { Theme, useTheme } from '@src/common/contexts';

const ToggleThemeButton: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {themeMode === Theme.Light ? Theme.Dark : Theme.Light} mode
      </button>
    </div>
  );
};

export default ToggleThemeButton;

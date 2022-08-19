import i18n from './i18next.js';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { chakraTheme } from '../src/common/contexts/themeContext/ThemeProvider';

export const parameters = {
  backgrounds: {
    default: 'Dark',
    values: [
      {
        name: 'Dark',
        value: '#1B181E',
      },
      {
        name: 'Light',
        value: '#F8F5F1',
      },
      {
        name: 'Accent',
        value: '#FF3F66',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    cn: '中文',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  chakra: {
    chakraTheme,
  },
};

import i18n from './i18next.js';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { chakraTheme } from '../src/common/contexts/themeContext/ThemeProvider';

export const parameters = {
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

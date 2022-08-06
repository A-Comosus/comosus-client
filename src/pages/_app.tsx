import type { AppProps } from 'next/app';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';

import { ApiClientProvider, ThemeContextProvider } from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiClientProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ApiClientProvider>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);

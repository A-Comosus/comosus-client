import type { AppProps } from 'next/app';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';
import LogRocket from 'logrocket';

import { ApiClientProvider, ThemeContextProvider } from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  LogRocket.init('yo9aip/a-comosus');

  return (
    <ApiClientProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ApiClientProvider>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);

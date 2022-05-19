import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
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

export default appWithTranslation(MyApp);

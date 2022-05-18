import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ApiClientProvider, ThemeProvider } from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiClientProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApiClientProvider>
  );
}

export default appWithTranslation(MyApp);

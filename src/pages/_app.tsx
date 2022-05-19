import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ApiClientProvider } from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiClientProvider>
      <Component {...pageProps} />
    </ApiClientProvider>
  );
}

export default appWithTranslation(MyApp);

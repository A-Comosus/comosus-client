import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApiClientProvider, LocalisationProvider } from '@common/contexts';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiClientProvider>
      <LocalisationProvider>
        <Component {...pageProps} />
      </LocalisationProvider>
    </ApiClientProvider>
  );
}

export default appWithTranslation(MyApp);

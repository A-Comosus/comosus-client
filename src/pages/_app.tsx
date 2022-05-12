import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ApiClientProvider } from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiClientProvider>
      <Component {...pageProps} />
    </ApiClientProvider>
  );
}

export default MyApp;

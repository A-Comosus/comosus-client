import type { AppProps } from 'next/app';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  ApiClientProvider,
  AuthProvider,
  ThemeContextProvider,
} from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApiClientProvider>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </ApiClientProvider>
    </AuthProvider>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);

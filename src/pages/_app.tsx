import type { AppProps } from 'next/app';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';

import {
  ApiClientProvider,
  AuthProvider,
  ThemeContextProvider,
  UserProvider,
} from '@common/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApiClientProvider>
        <ThemeContextProvider>
          {/* UserProvider should be converted using a different state manager later */}
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ThemeContextProvider>
      </ApiClientProvider>
    </AuthProvider>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useToast } from '@chakra-ui/react';
import LogRocket from 'logrocket';

import { useApiClient } from '@src/common/contexts';
import { useAuth } from '@src/stores';
import {
  LoginError,
  RegisterError,
  useLoginMutation,
  useRegisterMutation,
} from '@generated/graphql.queries';
import { AppRoute, UserStatus } from '@src/constants';

export function useRegisterApi() {
  const { t } = useTranslation('auth');
  const { gqlClient } = useApiClient();
  const toast = useToast();
  const { initStore } = useAuth();
  const { push } = useRouter();

  const [error, setError] = useState<RegisterError | null>(null);
  const { mutate: register, isLoading: isRegistering } = useRegisterMutation(
    gqlClient,
    {
      onSuccess: ({ register }) => {
        if (register.__typename === 'RegisterError') setError(register);

        if (register.__typename === 'RegisterSuccess') {
          const {
            user: { id },
            accessToken,
          } = register;

          toast({
            status: 'success',
            description: t('sign-up.success.message'),
            variant: 'subtle',
          });
          initStore({ id, accessToken });
          push({ pathname: AppRoute.Onboarding, query: { id } });
        }
      },
    },
  );

  return { register, error, isRegistering };
}

export function useLoginApi() {
  const router = useRouter();
  const { initStore } = useAuth();
  const { gqlClient } = useApiClient();

  const [error, setError] = useState<LoginError | null>(null);
  const { mutate: login, isLoading: isLoggingIn } = useLoginMutation(
    gqlClient,
    {
      onSuccess: ({ login }) => {
        if (login.__typename === 'LoginError') setError(login);

        if (login.__typename === 'LoginSuccess') {
          const {
            accessToken,
            user: { id, status, username, email },
          } = login;

          initStore({ id, accessToken });

          LogRocket.identify(id, {
            name: username,
            email,
          });

          status === UserStatus.Registered
            ? router.push({
                pathname: AppRoute.Onboarding,
                query: { id },
              })
            : status === UserStatus.Onboarded
            ? router.push({
                pathname: AppRoute.PromptVerify,
                query: { id },
              })
            : router.push(AppRoute.Admin);
        }
      },
    },
  );

  return { login, error, isLoggingIn };
}

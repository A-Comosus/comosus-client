import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useToast } from '@chakra-ui/react';

import { useApiClient } from '@src/common/contexts';
import { useAuth } from '@src/stores';
import { RegisterError, useRegisterMutation } from '@generated/graphql.queries';
import { AppRoute } from '@src/constants';
import { useState } from 'react';

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

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useAuth, useApiClient } from '@common/contexts';
import { useLoginMutation } from '@generated/graphql.queries';

import { VStack } from '@chakra-ui/react';
import { AppContainer } from '@src/common/components';
import { LoginForm } from '@src/modules/auth';
import { isNil } from 'lodash';

export default function Login() {
  const { t } = useTranslation('auth');
  const router = useRouter();
  const head = { title: t('login.title') };

  const { setAccessToken } = useAuth();
  const { gqlClient } = useApiClient();
  const {
    mutate: login,
    error,
    isLoading: isLoggingIn,
  } = useLoginMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        // @ts-ignore
        console.error(error.message);
      }

      if (data) {
        setAccessToken(data.login.accessToken);
        router.push('/admin');
      }
    },
  });

  const onSubmit = (value: LoginFormTypes) => {
    login({ payload: value });
  };

  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <LoginForm
          onSubmit={onSubmit}
          isLoading={isLoggingIn}
          isInvalid={!isNil(error)}
        />
      </VStack>
    </AppContainer>
  );
}

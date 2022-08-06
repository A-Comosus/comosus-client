import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useAuth } from '@src/stores';
import { useApiClient } from '@common/contexts';
import { useLoginMutation } from '@generated/graphql.queries';

import { VStack } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { LoginForm } from '@src/modules/auth';
import { isNil } from 'lodash';
import { AppRoute } from '@src/constants/PageRoutes';
import { UserStatus } from '@src/constants';

export default function Login() {
  const { t } = useTranslation('auth');
  const router = useRouter();
  const head = { title: t('login.title') };

  const { initStore } = useAuth();
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
        const {
          login: {
            accessToken,
            user: { id, status },
          },
        } = data;

        initStore({ id, accessToken });
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
  });

  const onSubmit = (value: LoginFormTypes) => {
    login({ payload: value });
  };

  return (
    <PageContainer head={head}>
      <VStack justify="center">
        <LoginForm
          onSubmit={onSubmit}
          isLoading={isLoggingIn}
          isInvalid={!isNil(error)}
        />
      </VStack>
    </PageContainer>
  );
}

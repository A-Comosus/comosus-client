import React from 'react';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useAuth } from '@src/stores';
import { useRegisterMutation } from '@generated/graphql.queries';
import { useRouter } from 'next/router';

import { PageContainer } from '@src/common/components';
import { Center, useToast, VStack } from '@chakra-ui/react';
import { SignUpForm } from '@src/modules/auth';
import { AppRoute } from '@src/constants';

export default function SignUp() {
  const { t } = useTranslation('auth');
  const head = { title: t('sign-up.title') };

  const toast = useToast();
  const router = useRouter();
  const { initStore } = useAuth();
  const { gqlClient } = useApiClient();
  const {
    mutate: register,
    error,
    isLoading: isRegistering,
  } = useRegisterMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        // @ts-ignore
        console.error(error.message);
      } else if (data) {
        const {
          register: {
            user: { id },
            accessToken,
          },
        } = data;

        toast({
          status: 'success',
          description: t('sign-up.success.message'),
          variant: 'subtle',
        });
        initStore({ id, accessToken });
        router.push({ pathname: AppRoute.Onboarding, query: { id } });
      }
    },
  });

  const onSubmit = (value: SignUpFormTypes) => {
    register({
      payload: {
        ...value,
        acceptPolicy: value.acceptPolicy ? true : false,
      },
    });
  };

  return (
    <PageContainer head={head}>
      <Center flex={1}>
        <SignUpForm
          onSubmit={onSubmit}
          isInvalid={!isNil(error)}
          isLoading={isRegistering}
        />
      </Center>
    </PageContainer>
  );
}

import React from 'react';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useRegisterMutation } from '@generated/graphql.queries';
import { useRouter } from 'next/router';

import { PageContainer } from '@src/common/components';
import { VStack } from '@chakra-ui/react';
import { SignUpForm } from '@src/modules/auth';
import { AuthRoute } from '@src/constants/PageRoutes';

export default function SignUp() {
  const { t } = useTranslation('auth');
  const head = { title: t('sign-up.title') };

  const router = useRouter();
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
        router.push(AuthRoute.Login);
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
      <VStack justify="center">
        <SignUpForm
          onSubmit={onSubmit}
          isInvalid={!isNil(error)}
          isLoading={isRegistering}
        />
      </VStack>
    </PageContainer>
  );
}

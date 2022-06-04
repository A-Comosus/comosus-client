import React from 'react';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useRegisterMutation } from '@generated/graphql.queries';

import { AppContainer } from '@src/common/components';
import { VStack } from '@chakra-ui/react';
import { SignUpForm } from '@src/modules/auth';

export default function SignUp() {
  const { t } = useTranslation('auth');
  const head = { title: t('signup.title') };

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
    <AppContainer head={head}>
      <VStack justify="center">
        <SignUpForm
          onSubmit={onSubmit}
          isInvalid={!isNil(error)}
          isLoading={isRegistering}
        />
      </VStack>
    </AppContainer>
  );
}

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';

import { HStack, VStack } from '@chakra-ui/react';
import { AppContainer, Logo } from '@src/common/components';
import { ForgetPasswordForm } from '@src/modules/auth';
import { isNil } from 'lodash';
import { useForgetPasswordMutation } from '@generated/graphql.queries';

export default function ForgetPassword() {
  const { t } = useTranslation('auth');
  const head = { title: t('forget-password.title') };
  const [successMessage, setSuccessMessage] = useState('');
  const { gqlClient } = useApiClient();
  const {
    mutate: forgetPasswordSendEmail,
    error,
    isLoading: isSendingEmail,
  } = useForgetPasswordMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        // @ts-ignore
        console.error(error);
        setSuccessMessage('');
      }
      if (data) {
        setSuccessMessage(t('forget-password.success'));
      }
    },
  });
  const onSubmit = (value: ForgetPasswordFormTypes) => {
    forgetPasswordSendEmail({ email: value });
  };

  return (
    <AppContainer head={head}>
      <VStack flex={1} padding="1rem">
        <HStack width="100%">
          <Logo height="5rem" />
        </HStack>
        <ForgetPasswordForm
          onSubmit={onSubmit}
          isLoading={isSendingEmail}
          isInvalid={!isNil(error)}
          successMessage={successMessage}
        />
      </VStack>
    </AppContainer>
  );
}

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useApiClient } from '@common/contexts';

import { HStack, VStack } from '@chakra-ui/react';
import { AppContainer, Logo } from '@src/common/components';
import { ResetPasswordForm } from '@src/modules/auth';
import { AuthRoute } from '@src/constants/PageRoutes';
import { useResetPasswordMutation } from '@generated/graphql.queries';
import { isNil } from 'lodash';

export default function ForgetPassword() {
  const { t } = useTranslation('auth');
  const { gqlClient } = useApiClient();
  const head = { title: t('reset-password.title') };

  const [resetToken, setResetToken] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [successAction, setSuccessAction] = useState('');
  const [successActionLink, setSuccessActionLink] = useState('');

  const token = useRouter().query.resettoken as string;
  useEffect(() => {
    !isNil(token) && setResetToken(token);
  }, [token]);

  const {
    mutate: resetPassword,
    error,
    isLoading: isResetingEmail,
  } = useResetPasswordMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        console.error(error);
        setSuccessMessage('');
      }
      if (data) {
        setSuccessMessage(t('reset-password.success'));
        setSuccessAction(t('reset-password.success-action'));
        setSuccessActionLink(AuthRoute.Login);
      }
    },
  });

  const onSubmit = (value: ResetPasswordFormTypes) => {
    resetPassword({
      detail: {
        password: value.password,
        resetToken,
      },
    });
  };

  return (
    <AppContainer head={head}>
      <VStack flex={1} padding="1rem">
        <HStack width="100%">
          <Logo height="5rem" />
        </HStack>
        <ResetPasswordForm
          onSubmit={onSubmit}
          isLoading={isResetingEmail}
          isInvalid={!isNil(error)}
          successMessage={successMessage}
          successAction={successAction}
          successActionLink={successActionLink}
        />
      </VStack>
    </AppContainer>
  );
}

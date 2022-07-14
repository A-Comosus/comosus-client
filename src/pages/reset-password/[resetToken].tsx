import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useApiClient } from '@common/contexts';

import { VStack } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { ResetPasswordForm } from '@src/modules/auth';
import { useResetPasswordMutation } from '@generated/graphql.queries';
import { AuthRoute } from '@src/constants/PageRoutes';
import { isNil } from 'lodash';

export default function ForgetPassword() {
  const { t } = useTranslation('auth');
  const { gqlClient } = useApiClient();
  const router = useRouter();
  const head = { title: t('reset-password.title') };

  const {
    query: { resetToken },
  } = router;
  const token = resetToken as string;

  const {
    mutate: resetPassword,
    error,
    isLoading: isResetingEmail,
  } = useResetPasswordMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        console.error(error);
      }
      if (data) {
        router.push(AuthRoute.Login);
      }
    },
  });

  const onSubmit = (value: ResetPasswordFormTypes) => {
    resetPassword({
      detail: {
        password: value.password,
        resetToken: token,
      },
    });
  };

  return (
    <PageContainer head={head}>
      <VStack flex={1} padding="1rem">
        <ResetPasswordForm
          onSubmit={onSubmit}
          isLoading={isResetingEmail}
          isInvalid={!isNil(error)}
        />
      </VStack>
    </PageContainer>
  );
}

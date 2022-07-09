import React from 'react';
import { isNil } from 'lodash';
import { useForgetPasswordMutation } from '@generated/graphql.queries';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { AuthRoute } from '@src/constants/PageRoutes';

import { VStack } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { ForgetPasswordForm } from '@src/modules/auth';

export default function ForgetPassword() {
  const { t } = useTranslation('auth');
  const head = { title: t('forget-password.title') };
  const router = useRouter();

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
      }
      if (data) {
        router.push(AuthRoute.forgetPasswordSuccess);
      }
    },
  });
  const onSubmit = (value: ForgetPasswordFormTypes) => {
    forgetPasswordSendEmail({ email: value });
  };

  return (
    <PageContainer head={head}>
      <VStack flex={1} padding="1rem">
        <ForgetPasswordForm
          onSubmit={onSubmit}
          isLoading={isSendingEmail}
          isInvalid={!isNil(error)}
        />
      </VStack>
    </PageContainer>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useRouter } from 'next/router';
import { AuthRoute } from '@src/constants/PageRoutes';
import { HStack, VStack } from '@chakra-ui/react';
import { PageContainer, Logo } from '@src/common/components';
import { ForgetPasswordForm } from '@src/modules/auth';
import { isNil } from 'lodash';
import { useForgetPasswordMutation } from '@generated/graphql.queries';

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
    onSettled: (error, data) => {
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
        <HStack width="100%">
          <Logo height="5rem" />
        </HStack>
        <ForgetPasswordForm
          onSubmit={onSubmit}
          isLoading={isSendingEmail}
          isInvalid={!isNil(error)}
        />
      </VStack>
    </PageContainer>
  );
}

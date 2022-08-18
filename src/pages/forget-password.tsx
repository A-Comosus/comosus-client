import React from 'react';
import { isNil } from 'lodash';
import { useForgetPasswordMutation } from '@generated/graphql.queries';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';

import { Center } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { ForgetPasswordForm, ForgetPasswordSuccess } from '@src/modules/auth';
import { useToggle } from '@src/utils/hooks';

export default function ForgetPassword() {
  const { t } = useTranslation('auth');
  const head = { title: t('forget-password.title') };

  const [isEmailSent, toggleEmailSent] = useToggle();
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
        toggleEmailSent();
      }
    },
  });
  const onSubmit = (value: ForgetPasswordFormTypes) => {
    forgetPasswordSendEmail({ email: value });
  };

  return (
    <PageContainer head={head}>
      <Center flex={1}>
        {isEmailSent ? (
          <ForgetPasswordSuccess />
        ) : (
          <ForgetPasswordForm
            onSubmit={onSubmit}
            isLoading={isSendingEmail}
            isInvalid={!isNil(error)}
          />
        )}
      </Center>
    </PageContainer>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginApi } from '@src/services/auth/auth.api';

import { Center } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { LoginForm } from '@src/modules/auth';

export default function Login() {
  const { t } = useTranslation('auth');
  const head = { title: t('login.title') };

  const { login, error, isLoggingIn } = useLoginApi();

  const onSubmit = (value: LoginFormTypes) => {
    login({ payload: value });
  };

  return (
    <PageContainer head={head}>
      <Center flex={1}>
        <LoginForm onSubmit={onSubmit} isLoading={isLoggingIn} error={error} />
      </Center>
    </PageContainer>
  );
}

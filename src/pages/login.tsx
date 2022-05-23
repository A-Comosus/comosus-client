import React from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@chakra-ui/react';
import { AppContainer } from '@src/common/components';
import { LoginForm } from '@src/modules/auth';

export default function Login() {
  const { t } = useTranslation('auth');
  const head = { title: t('login.title') };

  const onSubmit = () => {
    console.log('submitting form');
  };

  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <LoginForm onSubmit={onSubmit} />
      </VStack>
    </AppContainer>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageContainer } from '@src/common/components';
import { Center } from '@chakra-ui/react';
import { SignUpForm } from '@src/modules/auth';
import { useRegisterApi } from '@src/services/auth/auth.api';

export default function SignUp() {
  const { t } = useTranslation('auth');
  const head = { title: t('sign-up.title') };

  const { register, error, isRegistering } = useRegisterApi();
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
      <Center flex={1}>
        <SignUpForm
          onSubmit={onSubmit}
          error={error}
          isLoading={isRegistering}
        />
      </Center>
    </PageContainer>
  );
}

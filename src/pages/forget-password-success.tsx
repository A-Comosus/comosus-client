import React from 'react';
import { useTranslation } from 'react-i18next';

import { HStack, VStack } from '@chakra-ui/react';
import { PageContainer, Logo } from '@src/common/components';

import { ForgetPasswordSuccess } from '@src/modules/auth';

export default function NotifyForgetPasswordSuccess() {
  const { t } = useTranslation('auth');
  const head = { title: t('forget-password-success.title') };
  return (
    <PageContainer head={head}>
      <VStack flex={1} padding="1rem">
        <HStack width="100%">
          <Logo height="5rem" />
        </HStack>
        <ForgetPasswordSuccess />
      </VStack>
    </PageContainer>
  );
}

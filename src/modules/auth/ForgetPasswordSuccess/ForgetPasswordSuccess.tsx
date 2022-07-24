import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { GlobalRoute } from '@src/constants/PageRoutes';
import { VStack } from '@chakra-ui/react';
import { Button, Text } from '@common/components';

export default function ForgetPasswordSuccess() {
  const { t } = useTranslation('auth');
  const router = useRouter();

  return (
    <VStack flex={1} justify="center" align="stretch" gap="60px">
      <VStack align="stretch">
        <Text type="h2">{t('forget-password-success.page.title')}</Text>
        <Text type="p">{t('forget-password-success.page.subtitle')}</Text>
      </VStack>
      <Button type="button" onClick={() => router.push(GlobalRoute.Root)}>
        {t('forget-password-success.button')}
      </Button>
    </VStack>
  );
}

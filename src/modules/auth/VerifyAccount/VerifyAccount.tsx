import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { AppRoute } from '@src/constants/PageRoutes';
import { VStack, Spinner } from '@chakra-ui/react';
import { Button, Text } from '@common/components';

type VerifyAccountProps = {
  isVerifying: boolean;
};

export default function VerifyAccount({ isVerifying }: VerifyAccountProps) {
  const { t } = useTranslation('auth');
  const router = useRouter();

  return (
    <>
      {isVerifying ? (
        <Spinner />
      ) : (
        <VStack
          flex={1}
          justify="center"
          align="stretch"
          gap="60px"
          maxWidth="640px"
        >
          <VStack align="stretch">
            <Text type="generic.h1">{t('verify-account.page.title')}</Text>
          </VStack>
          <Button onClick={() => router.push(AppRoute.Admin)} size="lg">
            {t('verify-account.page.button')}
          </Button>
        </VStack>
      )}
    </>
  );
}

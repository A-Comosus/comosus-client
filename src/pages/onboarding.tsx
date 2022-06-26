import React from 'react';
import { useTranslation } from 'react-i18next';
import { OnboardingPage } from '@src/modules/auth';
import { AppContainer } from '@src/common/components';
import { VStack } from '@chakra-ui/react';

export default function Onboarding() {
  const { t } = useTranslation('auth');
  const head = { title: t('onboarding.pageTitle') };
  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <OnboardingPage></OnboardingPage>
      </VStack>
    </AppContainer>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@chakra-ui/react';
import { Text, Button } from '@src/common/components';

type OnboardedMessageProps = {
  onContinue: () => void;
  email: string;
};
export default function OnboardedMessage({
  onContinue,
  email,
}: OnboardedMessageProps) {
  const { t } = useTranslation('onboarding');

  return (
    <VStack align="stretch" gap="60px">
      <VStack align="flex-start" gap={3}>
        <Text type="generic.h1">{t('onboarded.heading.main')}</Text>
        <Text type="generic.h2">{t('onboarded.heading.sub', { email })}</Text>
      </VStack>

      <Button onClick={onContinue}>{t('onboarded.continue')}</Button>
    </VStack>
  );
}

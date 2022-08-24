import React from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@chakra-ui/react';
import { Text } from '@src/common/components';

type OnboardedMessageProps = {
  email: string;
};
export default function OnboardedMessage({ email }: OnboardedMessageProps) {
  const { t } = useTranslation('onboarding');

  return (
    <VStack
      align="stretch"
      gap="6rem"
      w="clamp(62.5%, 60rem, 100%)"
      maxW="60rem"
    >
      <VStack align="flex-start" gap={3}>
        <Text type="generic.h1">{t('onboarded.heading.main')}</Text>
        <Text type="generic.h2">{t('onboarded.heading.sub', { email })}</Text>
      </VStack>
    </VStack>
  );
}

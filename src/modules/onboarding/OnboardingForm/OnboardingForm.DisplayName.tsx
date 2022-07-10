import React from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { VStack } from '@chakra-ui/react';
import { Input, Text } from '@src/common/components';

type DisplayNameProps = {
  name: string;
  control: Control<OnboardingFormValues>;
};
export default function DisplayName({ name, control }: DisplayNameProps) {
  const { t } = useTranslation('onboarding');

  return (
    <VStack align="stretch" gap={'20px'}>
      <Text type="label">{t('display-name.label')}</Text>
      <Input
        name={name}
        control={control}
        placeholder={t('display-name.placeholder')}
        borderRadius={15}
      />
    </VStack>
  );
}

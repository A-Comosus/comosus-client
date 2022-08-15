import React from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Input } from '@src/common/components';

type DisplayNameProps = {
  name: string;
  control: Control<OnboardingFormValues>;
};
export default function DisplayName({ name, control }: DisplayNameProps) {
  const { t } = useTranslation('onboarding');

  return (
    <Input
      name={name}
      control={control}
      variant="outline"
      label={t('display-name.label')}
      placeholder={t('display-name.placeholder')}
    />
  );
}

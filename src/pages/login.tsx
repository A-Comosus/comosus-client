import { ToggleThemeButton } from '@src/common/components';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();
  return (
    <div>
      {t('login.title')}
      <ToggleThemeButton />
    </div>
  );
}

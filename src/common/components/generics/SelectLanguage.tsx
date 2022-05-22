import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Select } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function SelectLanguage() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [language, setLanguage] = useState(router.locale);

  const handleChangeLanguage = (event: any) => {
    event.preventDefault();
    setLanguage(event.target.value);
    router.push(`/`, undefined, { locale: event.target.value });
  };

  return (
    <Select flex={1} value={language} onChange={handleChangeLanguage}>
      <option value="cn">{t('languages.cn')}</option>
      <option value="en">{t('languages.en')}</option>
    </Select>
  );
}

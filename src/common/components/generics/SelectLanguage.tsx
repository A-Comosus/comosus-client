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
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: event.target.value },
    );
  };

  return (
    <Select
      value={language}
      onChange={handleChangeLanguage}
      variant="unstyled"
      color="#F8F5F1"
      fontSize="1.6rem"
      fontWeight={600}
    >
      <option style={{ background: '#1B181E' }} value="cn">
        {t('languages.cn')}
      </option>
      <option style={{ background: '#1B181E' }} value="en">
        {t('languages.en')}
      </option>
    </Select>
  );
}

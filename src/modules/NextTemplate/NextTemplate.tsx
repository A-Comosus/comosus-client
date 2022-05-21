import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Container } from '@common/components';
import { Description, NextInformation, Title } from './sections';
import { ToggleThemeButton } from '@common/components';

export default function NextTemplate() {
  const router = useRouter();
  const { t } = useTranslation('nextTemplate');
  const [language, setLanguage] = useState(router.locale);

  const handleChangeLanguage = (event: any) => {
    event.preventDefault();
    setLanguage(event.target.value);
    router.push(`/`, undefined, { locale: event.target.value });
  };

  const cards: Card[] = [
    {
      href: 'https://nextjs.org/docs',
      title: t('cards.0.title'),
      description: t('cards.0.description'),
    },
    {
      href: 'https://nextjs.org/learn',
      title: t('cards.1.title'),
      description: t('cards.1.description'),
    },
    {
      href: 'https://github.com/vercel/next.js/tree/canary/examples',
      title: t('cards.2.title'),
      description: t('cards.2.description'),
    },
    {
      href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      title: t('cards.3.title'),
      description: t('cards.3.description'),
    },
  ];

  const option1 = t('common:languages.cn');
  const option2 = t('common:languages.en');
  return (
    <Container type="main">
      <Title />
      <select value={language} onChange={handleChangeLanguage}>
        <option value="cn">{option1}</option>
        <option value="en">{option2}</option>
      </select>
      <ToggleThemeButton />
      <Description />
      <NextInformation cards={cards} />
    </Container>
  );
}

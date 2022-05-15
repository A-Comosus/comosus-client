import { Container } from '@src/common/components';
import { useLocalisation } from '@src/common/context';
import React, { useState } from 'react';
import { Description, NextInformation, Title } from './sections';

export default function NextTemplate() {
  const { t, changeLanguage, setDefaultNamespace } = useLocalisation();
  const [language, setLanguage] = useState('cn');
  setDefaultNamespace('nextTemplate');

  const handleChangeLanguage = (event: any) => {
    event.preventDefault();
    changeLanguage(event.target.value);
    setLanguage(event.target.value);
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
      <Description />
      <NextInformation cards={cards} />
    </Container>
  );
}

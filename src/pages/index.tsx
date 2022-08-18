import React from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { AuthRoute } from '@src/constants/PageRoutes';

import { PageContainer } from '@src/common/components';
import { HomeHeroCard } from '@src/modules/home';

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  const head = {
    title: t('common:site.title'),
    metas: [
      {
        name: 'description',
        content: t('common:site.description'),
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  };

  const heros = [
    {
      title: t('banner.title'),
      headline: t('headline'),
      subtitle: t('banner.subtitle'),
      cta: t('banner.cta'),
      link: AuthRoute.SignUp,
      src: 'assets/heros/phone.svg',
      alt: t('banner.alt'),
    },
    {
      title: t('custome-profile.title'),
      subtitle: t('custome-profile.subtitle'),
      cta: t('custome-profile.cta'),
      link: AuthRoute.SignUp,
      src: 'assets/heros/shapes.svg',
      alt: t('custome-profile.alt'),
    },
    {
      title: t('game-status.title'),
      subtitle: t('game-status.subtitle'),
      cta: t('game-status.cta'),
      link: AuthRoute.SignUp,
      src: 'assets/heros/squares.svg',
      alt: t('game-status.alt'),
    },
    {
      title: t('share-anywhere.title'),
      subtitle: t('share-anywhere.subtitle'),
      cta: t('share-anywhere.cta'),
      link: AuthRoute.SignUp,
      src: 'assets/heros/shapes2.svg',
      alt: t('share-anywhere.alt'),
    },
  ];

  return (
    <PageContainer head={head}>
      {heros.map((hero, index) => (
        <HomeHeroCard
          key={hero.title}
          hero={hero}
          isReversed={index % 2 === 0}
        />
      ))}
    </PageContainer>
  );
};

export default Home;

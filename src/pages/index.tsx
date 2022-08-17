import React from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { AuthRoute } from '@src/constants/PageRoutes';

import { VStack, Image } from '@chakra-ui/react';
import {
  SectionHContainer,
  Button,
  Text,
  PageContainer,
} from '@src/common/components';

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

  const router = useRouter();
  const heros = [
    {
      title: t('banner.title'),
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
      <VStack align="stretch" spacing="0">
        {heros.map((hero, index) => (
          <SectionHContainer
            key={index}
            flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
          >
            <VStack alignItems="flex-start" gap="1rem">
              <Text type="h2">{hero.title}</Text>
              {index === 0 && (
                <Text type="h1" color="#FB446C">
                  {t('headline')}
                </Text>
              )}
              <Text type="h4">{hero.subtitle}</Text>
              <Button onClick={() => router.push(hero.link)} variant="gradient">
                {hero.cta}
              </Button>
            </VStack>

            <Image
              marginInlineStart="0 !important"
              src={hero.src}
              alt={hero.alt}
            />
          </SectionHContainer>
        ))}
      </VStack>
    </PageContainer>
  );
};

export default Home;

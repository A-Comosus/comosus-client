import React from 'react';
import { useRouter } from 'next/router';

import { Image, Stack, Text, VStack } from '@chakra-ui/react';
import { Button } from '@src/common/components';

type HomeHeroCardProps = {
  hero: HomeCard;
  isReversed: boolean;
};

export function HomeHeroCard({ hero, isReversed }: HomeHeroCardProps) {
  const router = useRouter();

  return (
    <Stack
      key={hero.title}
      as="section"
      flex={1}
      direction={[`column`, `row${isReversed ? '-reverse' : ''}`]}
      justify="space-between"
      align="center"
      gap="4rem"
      minH={['auto', '70vh']}
    >
      <VStack alignItems={['stretch', 'flex-start']} gap="1rem">
        <Text
          as="h2"
          fontSize={['4rem', '6rem']}
          fontWeight={600}
          fontFamily="Blinker"
          lineHeight="100%"
        >
          {hero.title}
        </Text>
        {hero.headline && (
          <Text
            as="h1"
            color="#FB446C"
            fontSize={['6rem', '9rem']}
            fontWeight={700}
            fontFamily="Blinker"
            lineHeight="100%"
          >
            {hero.headline}
          </Text>
        )}
        <Text
          as="h4"
          color="#ADB2C6"
          fontSize={['1.2rem', '1.6rem']}
          fontWeight={600}
          lineHeight="2rem"
        >
          {hero.subtitle}
        </Text>
        <Button onClick={() => router.push(hero.link)} variant="gradient">
          {hero.cta}
        </Button>
      </VStack>

      <Image maxW={['62.5%', '100%']} src={hero.src} alt={hero.alt} />
    </Stack>
  );
}

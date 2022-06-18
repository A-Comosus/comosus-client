import React from 'react';

import { Image, HStack } from '@chakra-ui/react';
import { Text } from '@common/components';
import { useTranslation } from 'react-i18next';

type LogoPropsType = {
  variant?: 'block' | 'inline';
  height?: string;
};

export default function Logo({ variant = 'block', height }: LogoPropsType) {
  const { t } = useTranslation();
  const siteTitle = t('site.title');

  const variants = {
    block: (
      <Image
        src="/assets/a-comosus-logo.svg"
        alt={siteTitle}
        alignSelf="center"
        height={height}
      />
    ),
    inline: (
      <HStack gap={1}>
        <Image src="/assets/logo.png" alt={siteTitle} alignSelf="center" />
        <Text>{siteTitle}</Text>
      </HStack>
    ),
  };

  return variants[variant];
}

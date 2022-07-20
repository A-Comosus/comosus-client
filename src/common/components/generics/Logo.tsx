import React from 'react';
import { useTranslation } from 'react-i18next';

import { Image, HStack, BoxProps } from '@chakra-ui/react';
import { Text } from '@common/components';

type LogoPropsType = {
  variant?: 'block' | 'inline';
  height?: string;
} & BoxProps;

export default function Logo({
  variant = 'block',
  height,
  ...props
}: LogoPropsType) {
  const { t } = useTranslation();
  const siteTitle = t('site.title');

  const variants = {
    block: (
      <Image
        src="/assets/a-comosus-logo.png"
        alt={siteTitle}
        alignSelf="center"
        height={height}
        {...props}
      />
    ),
    inline: (
      <HStack gap={1} {...props}>
        <Image src="/assets/logo.png" alt={siteTitle} alignSelf="center" />
        <Text color="white">{siteTitle}</Text>
      </HStack>
    ),
  };

  return variants[variant];
}

import React from 'react';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import { GlobalRoute } from '@src/constants';

import { Image, Link } from '@chakra-ui/react';

type LogoPropsType = {
  variant?: 'block' | 'inline';
};

export default function Logo({ variant = 'block' }: LogoPropsType) {
  const { t } = useTranslation();
  const siteTitle = t('site.title');

  const propVariants = {
    block: {
      src: '/assets/logo_block.svg',
      maxH: ['5rem', '13rem'],
    },
    inline: {
      src: '/assets/logo_inline.svg',
      maxH: ['2rem', '5rem'],
    },
  };

  return (
    <NextLink href={GlobalRoute.Root} passHref>
      <Link>
        <Image alt={siteTitle} {...propVariants[variant]} />
      </Link>
    </NextLink>
  );
}

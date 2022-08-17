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

  const sources = {
    block: '/assets/logo_block.svg',
    inline: '/assets/logo_inline.svg',
  };

  return (
    <NextLink href={GlobalRoute.Root} passHref>
      <Link>
        <Image src={sources[variant]} alt={siteTitle} />
      </Link>
    </NextLink>
  );
}

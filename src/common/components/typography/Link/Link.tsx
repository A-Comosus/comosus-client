import React from 'react';
import { UrlObject } from 'url';

import NextLink from 'next/link';
import { HStack, Link as CKLink } from '@chakra-ui/react';

type LinkProps = {
  children: React.ReactNode;
  href: string | UrlObject;
  variant?: 'default' | 'accent' | 'highlight';
  icon?: React.ReactNode;
};

export function Link({ children, href, variant = 'default', icon }: LinkProps) {
  const propVariants = {
    default: {
      fontWeight: 600,
    },
    accent: {
      color: '#FB446C',
    },
    highlight: {
      color: '#FB446C',
      fontWeight: 700,
      textDecoration: 'underline',
    },
  };

  return (
    <NextLink href={href} passHref>
      <HStack fontSize="1.6rem">
        {icon}
        <CKLink
          color="#F8F5F1"
          textAlign="center"
          whiteSpace="nowrap"
          {...propVariants[variant]}
        >
          {children}
        </CKLink>
      </HStack>
    </NextLink>
  );
}

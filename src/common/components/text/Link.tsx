import React from 'react';
import { UrlObject } from 'url';

import NextLink from 'next/link';
import { Link as CKLink, LinkProps as CKLinkProps } from '@chakra-ui/react';

type LinkProps = {
  children: React.ReactNode;
  href: string | UrlObject;
} & CKLinkProps;

export default function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <CKLink color="#0070f3" {...props}>
        {children}
      </CKLink>
    </NextLink>
  );
}

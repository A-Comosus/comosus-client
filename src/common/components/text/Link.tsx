import React from 'react';

import { Link as CKLink, LinkProps as CKLinkProps } from '@chakra-ui/react';

type LinkProps = {
  children: React.ReactNode;
} & CKLinkProps;

export default function Link({ children, ...props }: LinkProps) {
  return (
    <CKLink color="#0070f3" {...props}>
      {children}
    </CKLink>
  );
}

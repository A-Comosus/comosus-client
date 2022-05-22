import React from 'react';

import { Heading as CKHeading, Text as CKText, Code } from '@chakra-ui/react';

export type TextTypes = 'h1' | 'h2' | 'p' | 'code' | 'span';

type TextProps = {
  children: React.ReactNode;
  type?: TextTypes;
};

export default function Text({ children, type = 'p' }: TextProps) {
  // TODO: Add localization logic here

  const types = {
    h1: (
      <CKHeading as="h1" fontSize="4rem">
        {children}
      </CKHeading>
    ),
    h2: <CKHeading as="h2">{children}</CKHeading>,
    p: <CKText as="p">{children}</CKText>,
    code: (
      <Code borderRadius="5px" p="0.75rem" fontSize="1.1rem">
        {children}
      </Code>
    ),
    span: <CKText as="span">{children}</CKText>,
  };

  return types[type];
}

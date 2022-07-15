import React from 'react';

import {
  Heading as CKHeading,
  HeadingProps,
  Text as CKText,
  TextProps as CKTextProps,
  Code,
} from '@chakra-ui/react';

export type TextTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'label'
  | 'code'
  | 'span';

type TextProps = {
  children: React.ReactNode;
  type?: TextTypes;
} & HeadingProps &
  CKTextProps;

export default function Text({ children, type = 'p', ...props }: TextProps) {
  const types = {
    h1: (
      <CKHeading as="h1" fontSize={32} {...props}>
        {children}
      </CKHeading>
    ),
    h2: (
      <CKHeading as="h2" fontSize={16} {...props}>
        {children}
      </CKHeading>
    ),
    h3: (
      <CKHeading as="h3" {...props}>
        {children}
      </CKHeading>
    ),
    h4: (
      <CKHeading as="h4" fontSize={16} {...props}>
        {children}
      </CKHeading>
    ),
    p: (
      <CKText as="p" {...props}>
        {children}
      </CKText>
    ),
    label: (
      <CKText as="p" fontSize={16} fontWeight="700" {...props}>
        {children}
      </CKText>
    ),
    code: (
      <Code borderRadius="5px" p="0.75rem" fontSize="1.1rem">
        {children}
      </Code>
    ),
    span: (
      <CKText as="span" {...props}>
        {children}
      </CKText>
    ),
  };

  return types[type];
}

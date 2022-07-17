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
      <CKHeading as="h1" whiteSpace="pre-line" fontSize={80} {...props}>
        {children}
      </CKHeading>
    ),
    h2: (
      <CKHeading as="h2" whiteSpace="pre-line" fontSize={55} {...props}>
        {children}
      </CKHeading>
    ),
    h3: (
      <CKHeading as="h3" whiteSpace="pre-line" fontSize={36} {...props}>
        {children}
      </CKHeading>
    ),
    h4: (
      <CKText as="h4" whiteSpace="pre-line" fontSize={18} {...props}>
        {children}
      </CKText>
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

import React from 'react';

import { Heading1, Heading2, Code, Link } from './_styled';

export type TextTypes = 'h1' | 'h2' | 'p' | 'a' | 'code' | 'span';

type TextProps = {
  children: React.ReactNode;
  type?: TextTypes;
};

export default function Text({ children, type = 'p' }: TextProps) {
  // TODO: Add localization logic here

  const types = {
    h1: <Heading1>{children}</Heading1>,
    h2: <Heading2>{children}</Heading2>,
    p: <p>{children}</p>,
    a: <Link>{children}</Link>,
    code: <Code>{children}</Code>,
    span: <span>{children}</span>,
  };

  return types[type];
}

import React from 'react';

type LinkProps = {
  children: React.ReactNode;
  testid?: string;
  href: string;
  target?: '_blank' | '_parent';
  rel?: string;
};

export default function Link({
  children,
  testid,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
}: LinkProps) {
  return (
    <a data-testid={testid} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

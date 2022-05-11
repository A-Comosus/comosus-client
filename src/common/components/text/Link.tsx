import React, { AnchorHTMLAttributes } from 'react';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  target?: '_blank' | '_parent';
  rel?: string;
};

export default function Link({
  children,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
}: LinkProps) {
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

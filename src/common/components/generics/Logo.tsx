import React from 'react';

import { Image } from '@chakra-ui/react';

type LogoPropsType = {
  height?: string;
};

export default function Logo({ height }: LogoPropsType) {
  return (
    <Image
      src="/assets/a-comosus-logo.svg"
      alt="a-comosus logo"
      alignSelf="center"
      height={height}
    />
  );
}

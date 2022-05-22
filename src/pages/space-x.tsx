import { AppContainer } from '@src/common/components';
import { SpaceX } from '@src/modules';
import React from 'react';

export default function SpaceXPage() {
  const head = {
    title: 'Space X',
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  };

  return (
    <AppContainer head={head}>
      <SpaceX />
    </AppContainer>
  );
}

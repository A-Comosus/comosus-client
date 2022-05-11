import React from 'react';
import { DefaultContainer, MainContainer } from './_styled';

type ContainerProps = {
  children: React.ReactNode;
  type?: 'main' | 'default';
};

export default function Container({
  children,
  type = 'default',
}: ContainerProps) {
  const types = {
    main: <MainContainer>{children}</MainContainer>,
    default: <DefaultContainer>{children}</DefaultContainer>,
  };

  return types[type];
}

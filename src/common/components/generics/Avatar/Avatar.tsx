import React from 'react';

import {
  Avatar as CKAvatar,
  AvatarProps as CKAvatarProps,
} from '@chakra-ui/react';

type AvatarProps = {
  // TODO: this is bad
  size: string;
  user: any;
} & CKAvatarProps;
export function Avatar({ size, user }: AvatarProps) {
  return (
    <CKAvatar
      size={size as string}
      name={user.displayName as string}
      src={user.avatarUrl as string}
    />
  );
}

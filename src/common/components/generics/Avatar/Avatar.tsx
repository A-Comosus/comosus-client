import React from 'react';

import {
  Avatar as CKAvatar,
  AvatarProps as CKAvatarProps,
} from '@chakra-ui/react';

type AvatarProps = {
  // TODO: this is bad
  user: any;
} & CKAvatarProps;
export function Avatar({ user }: AvatarProps) {
  return (
    <CKAvatar
      size="xl"
      name={user.displayName as string}
      src={user.avatarUrl as string}
    />
  );
}

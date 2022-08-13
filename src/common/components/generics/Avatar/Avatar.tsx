import React from 'react';
import { User } from '@generated/graphql.queries';

import {
  Avatar as CKAvatar,
  AvatarProps as CKAvatarProps,
} from '@chakra-ui/react';

type AvatarProps = {
  user: User;
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

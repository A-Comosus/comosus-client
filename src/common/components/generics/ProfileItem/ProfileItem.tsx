import React from 'react';

import Generic from './ProfileItem.Generic';
import Video from './ProfileItem.Video';
import Pinterest from './ProfileItem.Pinterest';

type ProfileItemProps = {
  link: PublicLink;
};
export default function ProfileItem({ link }: ProfileItemProps) {
  const { type, ...linkProps } = link;

  const variant = {
    generic: <Generic {...linkProps} />,
    video: <Video {...linkProps} />,
    pinterest: <Pinterest {...linkProps} />,
  };

  return variant[type as 'generic' | 'video' | 'pinterest'];
}

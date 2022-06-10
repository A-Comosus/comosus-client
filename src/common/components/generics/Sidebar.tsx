import React from 'react';
import { IoLinkSharp } from 'react-icons/io5';
import { BsGear } from 'react-icons/bs';
import { SiGoogleanalytics } from 'react-icons/si';
import { BiUpload } from 'react-icons/bi';
import { BsChatSquareDots } from 'react-icons/bs';
import { TbColorSwatch } from 'react-icons/tb';
import { BsMegaphone } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';
import MenuItem from './MenuItem';

import styles from './Sidebar.module.scss';

function Sidebar() {
  const navItems = [
    {
      href: '/',
      content: 'Links',
      icon: <IoLinkSharp />,
    },
    {
      href: '/',
      content: 'Appearance',
      icon: <TbColorSwatch />,
    },
    {
      href: '/',
      content: 'Settings',
      icon: <BsGear />,
    },
    {
      href: '/',
      content: 'Analytics',
      icon: <SiGoogleanalytics />,
    },
    {
      href: '/',
      content: 'Upgrade',
      icon: <BiUpload />,
    },
    {
      href: '/',
      content: 'Support',
      icon: <BsChatSquareDots />,
    },
    {
      href: '/',
      content: "What's new",
      icon: <BsMegaphone />,
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <Image src="/assets/avatar.png" alt="avatar" />
      </div>
      <ul>
        {navItems.map(({ href, content, icon }, index) => (
          <MenuItem key={index} href={href} content={content} icon={icon} />
        ))}
      </ul>
      <div className={styles.logo}>
        <Image src="/assets/logo.png" alt="a-comusus logo" alignSelf="center" />
        <p className={styles.logo_title}> A-Comosus</p>
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import { IoLinkSharp } from 'react-icons/io5';
import { BsGear } from 'react-icons/bs';
import { SiGoogleanalytics } from 'react-icons/si';
import { BiUpload } from 'react-icons/bi';
import { BsChatSquareDots } from 'react-icons/bs';
import { TbColorSwatch } from 'react-icons/tb';
import { BsMegaphone } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { Image, VStack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import styles from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

import { Logo } from '@common/components';

function Sidebar() {
  const { t } = useTranslation();
  const navItems = [
    {
      href: '/admin',
      content: t('sidebar.link'),
      icon: <IoLinkSharp />,
    },
    {
      href: '/',
      content: t('sidebar.appearance'),
      icon: <TbColorSwatch />,
    },
    {
      href: '/',
      content: t('sidebar.settings'),
      icon: <BsGear />,
    },
    {
      href: '/',
      content: t('sidebar.analytics'),
      icon: <SiGoogleanalytics />,
    },
    {
      href: '/',
      content: t('sidebar.upgrade'),
      icon: <BiUpload />,
    },
    {
      href: '/',
      content: t('sidebar.support'),
      icon: <BsChatSquareDots />,
    },
    {
      href: '/',
      content: t('sidebar.new'),
      icon: <BsMegaphone />,
    },
    {
      href: '/',
      content: t('sidebar.my-account'),
      icon: <MdOutlineAccountCircle />,
    },
    {
      href: '/',
      content: t('sidebar.logout'),
      icon: <MdLogout />,
    },
  ];

  return (
    <nav className={styles.sidebar}>
      <VStack flex={1} gap={10}>
        <Image
          className={styles.sidebar__avatar}
          src="/assets/avatar.png"
          alt="avatar"
        />
        <ul className={styles.sidebar__menu}>
          {navItems.map(({ href, content, icon }, index) => (
            <MenuItem key={index} href={href} content={content} icon={icon} />
          ))}
        </ul>
      </VStack>

      <Logo w="160px" />
    </nav>
  );
}

export default Sidebar;

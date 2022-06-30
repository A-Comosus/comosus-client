import React from 'react';
import { useTranslation } from 'react-i18next';

import { IoLinkSharp } from 'react-icons/io5';
import { BsGear } from 'react-icons/bs';
import { SiGoogleanalytics } from 'react-icons/si';
import { BiUpload } from 'react-icons/bi';
import { BsChatSquareDots } from 'react-icons/bs';
import { TbColorSwatch } from 'react-icons/tb';
import { BsMegaphone } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';

import { AppRoute } from '@src/constants/PageRoutes';
import { Avatar, VStack } from '@chakra-ui/react';
import { Logo } from '@common/components';
import SidebarMenuItem from './Sidebar.MenuItem';
import SidebarLogout from './Sidebar.Logout';

import styles from './Sidebar.module.scss';

function Sidebar() {
  const { t } = useTranslation();
  const navItems = [
    {
      href: AppRoute.Admin,
      content: t('sidebar.link'),
      icon: <IoLinkSharp />,
    },
    {
      href: AppRoute.Appearance,
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
  ];

  return (
    <nav className={styles.sidebar}>
      <VStack flex={1} gap={10}>
        <Avatar size="xl" src="https://picsum.photos/200" />

        <ul className={styles.sidebar__menu}>
          {navItems.map(({ href, content, icon }, index) => (
            <SidebarMenuItem
              key={index}
              href={href}
              content={content}
              icon={icon}
            />
          ))}
          <SidebarLogout />
        </ul>
      </VStack>

      <Logo w="160px" />
    </nav>
  );
}

export default Sidebar;

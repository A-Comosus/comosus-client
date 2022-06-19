import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { HStack } from '@chakra-ui/react';
import styles from './Sidebar.module.scss';

interface MenuInfo {
  href: string;
  content: string;
  icon: React.ReactNode;
}
export default function SidebarMenuItem({ href, content, icon }: MenuInfo) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li
      className={`${styles.sidebar__menu__item} ${
        isActive ? styles.sidebar__menu__item_active : ''
      }`}
    >
      <Link href={href} passHref>
        <HStack as="a" p={'10px 20px'}>
          <span className={styles.sidebar__menu__item__link__icon}>{icon}</span>
          <span className={styles.sidebar__menu__item__link__title}>
            {content}
          </span>
        </HStack>
      </Link>
    </li>
  );
}

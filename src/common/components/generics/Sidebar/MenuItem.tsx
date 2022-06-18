import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

interface MenuInfo {
  href: string;
  content: string;
  icon: React.ReactNode;
}
export default function MenuItem({ href, content, icon }: MenuInfo) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link className={styles.sidebar__menu__item} href={href} passHref>
      <a
        className={`${styles.sidebar__menu__item__link} ${
          isActive ? styles.sidebar__menu__item__link_active : ''
        }`}
      >
        <span className={styles.sidebar__menu__item__link__icon}>{icon}</span>
        <span className={styles.sidebar__menu__item__link__title}>
          {content}
        </span>
      </a>
    </Link>
  );
}

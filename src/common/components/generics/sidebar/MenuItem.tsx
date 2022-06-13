import React from 'react';
import styles from './Sidebar.module.scss';
interface MenuInfo {
  href: string;
  content: string;
  icon: any;
}
export default function MenuItem(props: MenuInfo) {
  const { href, content, icon } = props;
  return (
    <li className={styles.sidebar__menu__item}>
      <a className={styles.sidebar__menu__item__link} href={href}>
        <span className={styles.sidebar__menu__item__link__icon}>{icon}</span>
        <span className={styles.sidebar__menu__item__link__title}>
          {content}
        </span>
      </a>
    </li>
  );
}

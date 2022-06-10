import React from 'react';
import styles from './Sidebar.module.scss';
interface MenuInfo {
  href: string;
  content: string;
  icon: any;
}
const MenuItem = (props: MenuInfo) => {
  const { href, content, icon } = props;
  return (
    <li>
      <a href={href}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{content}</span>
      </a>
    </li>
  );
};

export default MenuItem;

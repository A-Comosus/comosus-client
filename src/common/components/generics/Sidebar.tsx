import React from 'react';
import { IoLinkSharp } from 'react-icons/io5';
import { BsGear } from 'react-icons/bs';
import { SiGoogleanalytics } from 'react-icons/si';
import { BiUpload } from 'react-icons/bi';
import { BsChatSquareDots } from 'react-icons/bs';
import { TbColorSwatch } from 'react-icons/tb';
import { BsMegaphone } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';

import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <Image src="/assets/avatar.png" alt="avatar" />
      </div>
      <ul>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <IoLinkSharp name="Links"></IoLinkSharp>
            </span>
            <span className={styles.title}>Links</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <TbColorSwatch name="Appearance"></TbColorSwatch>
            </span>
            <span className={styles.title}>Appearance</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <BsGear name="Settings"></BsGear>
            </span>
            <span className={styles.title}>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <SiGoogleanalytics name="Analytics"></SiGoogleanalytics>
            </span>
            <span className={styles.title}>Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <BiUpload name="Upgrade"></BiUpload>
            </span>
            <span className={styles.title}>Upgrade</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <BsChatSquareDots name="Support"></BsChatSquareDots>
            </span>
            <span className={styles.title}>Support</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.icon}>
              <BsMegaphone name="News"></BsMegaphone>
            </span>
            <span className={styles.title}>What&apos;s new</span>
          </a>
        </li>
      </ul>
      <div className={styles.logo}>
        <Image src="/assets/logo.png" alt="a-comusus logo" alignSelf="center" />
        <p className={styles.logo_title}> A-Comosus</p>
      </div>
    </div>
  );
}

export default Sidebar;

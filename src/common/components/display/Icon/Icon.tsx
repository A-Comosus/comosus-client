import React from 'react';

import { BsShareFill } from 'react-icons/bs';
import {
  RiDeleteBin5Line,
  RiLockPasswordLine,
  RiMenuFoldLine,
} from 'react-icons/ri';

import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineEdit,
} from 'react-icons/ai';
import { FiImage, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
  MdCheckCircle,
  MdError,
  MdLogout,
  MdOutlineEmail,
} from 'react-icons/md';
import { TbLink, TbColorSwatch, TbSettings } from 'react-icons/tb';
import {
  FaShareSquare,
  FaEthereum,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from 'react-icons/fa';

const icons = {
  default: <FiImage />,
  menu: <RiMenuFoldLine />,
  share: <BsShareFill />,
  'share-btn': <FaShareSquare />,
  heart: <AiOutlineHeart />,
  edit: <AiOutlineEdit />,
  check: <MdCheckCircle color="#0ACF83" />,
  error: <MdError color="#F5483D" />,
  delete: <RiDeleteBin5Line />,
  'arrow-up': <FiChevronUp />,
  'arrow-down': <FiChevronDown />,

  account: <AiOutlineUser />,
  password: <RiLockPasswordLine />,
  phone: <AiOutlinePhone />,
  message: <AiOutlineMessage />,
  email: <MdOutlineEmail />,
  logout: <MdLogout />,

  link: <TbLink />,
  'color-swatch': <TbColorSwatch />,
  settings: <TbSettings />,
  location: <FaMapMarkerAlt />,

  eth: <FaEthereum />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
};

export const variants = Object.keys(icons);
export type IconVariant = keyof typeof icons;
type IconProps = {
  // This is to hack storybook to use args.color
  color?: string;
  variant?: IconVariant;
};
export function Icon({ variant = 'default' }: IconProps) {
  return icons[variant];
}

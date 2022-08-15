import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'Common/Generic/NavBar',
  component: NavBar,
  args: {},
} as ComponentMeta<typeof NavBar>;

export const Basic: ComponentStory<typeof NavBar> = (args) => {
  return <NavBar {...args} />;
};

export const NavDisabled: ComponentStory<typeof NavBar> = (args) => {
  return <NavBar {...args} disableNavOptions />;
};

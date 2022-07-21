import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PageContainer from './PageContainer';

export default {
  title: 'Containers/PageContainer',
  component: PageContainer,
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = (args) => (
  <PageContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <></>,
  head: { title: 'PageContainer' },
};

export const NavDisabled = Template.bind({});
NavDisabled.args = {
  ...Default.args,
  disableNavOptions: true,
};

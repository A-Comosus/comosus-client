import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PageContainer from './PageContainer';
import { QueryClient, QueryClientProvider } from 'react-query';

export default {
  title: 'Containers/PageContainer',
  component: PageContainer,
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = (args) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer {...args} />
    </QueryClientProvider>
  );
};

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

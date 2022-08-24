import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ApiClientProvider, UserProvider } from '@src/common/contexts';

export default {
  title: 'Common/Generic/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Basic = () => {
  return (
    <ApiClientProvider>
      <UserProvider>
        <Sidebar />
      </UserProvider>
    </ApiClientProvider>
  );
};

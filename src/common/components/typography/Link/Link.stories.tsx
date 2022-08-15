import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Link } from './Link';
import { VStack } from '@chakra-ui/react';

export default {
  title: 'Common/Typography/Link',
  component: Link,
  args: {
    children: 'Link',
    href: '',
  },
} as ComponentMeta<typeof Link>;

export const Basic: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />;
};

export const Variants: ComponentStory<typeof Link> = (args) => {
  return (
    <VStack>
      <Link {...args} />
      <Link {...args} variant="accent" />
      <Link {...args} variant="highlight" />
    </VStack>
  );
};

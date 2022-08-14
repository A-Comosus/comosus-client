import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon, variants, IconVariant } from './Icon';
import { Text, Wrap, WrapItem } from '@chakra-ui/react';

export default {
  title: 'Common/Display/Icon',
  component: Icon,
  args: {
    color: '#F8F5F1',
  },
} as ComponentMeta<typeof Icon>;

export const Basic: ComponentStory<typeof Icon> = (args) => (
  <Text color={args.color} fontSize="1.6rem">
    <Icon {...args} />
  </Text>
);

export const Variants: ComponentStory<typeof Icon> = (args) => {
  return (
    <Wrap>
      {variants.map((variant) => (
        <WrapItem key={variant}>
          <Text color={args.color} fontSize="1.6rem">
            <Icon {...args} variant={variant as IconVariant} />
          </Text>
        </WrapItem>
      ))}
    </Wrap>
  );
};

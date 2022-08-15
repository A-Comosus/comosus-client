import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Common/Forms/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Variants = () => (
  <>
    <Button variant="primary">Primary</Button>
    <Button variant="accent">Accent</Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="lg">Button</Button>
    <Button size="md">Button</Button>
    <Button size="sm">Button</Button>
  </>
);

export const Disabled = () => (
  <>
    <Button isDisabled variant="primary">
      Primary
    </Button>
    <Button isDisabled variant="accent">
      Accent
    </Button>
  </>
);

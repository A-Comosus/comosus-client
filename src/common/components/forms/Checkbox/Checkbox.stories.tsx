import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Checkbox } from './Checkbox';

export default {
  title: 'Common/Forms/Checkbox',
  component: Checkbox,
  args: {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim molestiae qui totam ratione ex numquam quaerat quibusdam nemo reprehenderit.',
  },
} as ComponentMeta<typeof Checkbox>;

export const Basic: ComponentStory<typeof Checkbox> = (args) => {
  const { control } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  return <Checkbox {...args} name="checkbox" control={control} />;
};

export const Error: ComponentStory<typeof Checkbox> = (args) => {
  const { control, setError } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  setError('checkbox', { type: 'error', message: 'Error Message' });

  return <Checkbox {...args} name="checkbox" control={control} />;
};

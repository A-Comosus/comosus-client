import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Textarea } from './Textarea';

export default {
  title: 'Common/Forms/Textarea',
  component: Textarea,
  args: { label: 'Label', placeholder: 'Placeholder' },
} as ComponentMeta<typeof Textarea>;

export const Basic: ComponentStory<typeof Textarea> = (args) => {
  const { control } = useForm({
    defaultValues: {
      input: '',
    },
  });

  return <Textarea {...args} name="input" control={control} />;
};

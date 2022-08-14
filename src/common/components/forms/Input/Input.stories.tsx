import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { FiImage } from 'react-icons/fi';
import Input from './Input';
import { VStack } from '@chakra-ui/react';

export default {
  title: 'Common/Forms/Input',
  component: Input,
  args: { label: 'Label' },
} as ComponentMeta<typeof Input>;

export const Basic: ComponentStory<typeof Input> = (args) => {
  const { control } = useForm({
    defaultValues: {
      input: '',
    },
  });

  return <Input {...args} name="input" control={control} />;
};

export const Error: ComponentStory<typeof Input> = (args) => {
  const { control, setError } = useForm({
    defaultValues: {
      input: '',
    },
  });
  setError('input', { type: 'custom', message: 'Error Message' });

  return (
    <VStack spacing="2rem">
      <Input {...args} name="input" control={control} />
      <Input name="input" control={control} leftElement={<FiImage />} />
    </VStack>
  );
};

export const Variants: ComponentStory<typeof Input> = (args) => {
  const { control } = useForm({
    defaultValues: {
      labeled: '',
      underline: '',
      outline: '',
    },
  });

  return (
    <VStack spacing="2rem">
      <Input {...args} name="labeled" control={control} variant="underline" />
      <Input
        {...args}
        label=""
        name="underline"
        control={control}
        variant="underline"
        leftElement={<FiImage />}
      />
      <Input {...args} name="outline" control={control} variant="outline" />
    </VStack>
  );
};

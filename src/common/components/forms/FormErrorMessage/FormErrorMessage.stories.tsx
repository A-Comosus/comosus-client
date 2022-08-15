import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormControl } from '@chakra-ui/react';
import { FormErrorMessage } from './FormErrorMessage';

export default {
  title: 'Common/Forms/FormErrorMessage',
  component: FormErrorMessage,
  args: {
    error: 'Error Message',
  },
} as ComponentMeta<typeof FormErrorMessage>;

const Template: ComponentStory<typeof FormErrorMessage> = (args) => (
  <FormControl isInvalid={true}>
    <FormErrorMessage {...args} />
  </FormControl>
);

export const Default = Template.bind({});

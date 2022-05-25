import React from 'react';

import { MdError } from 'react-icons/md';
import { FormErrorMessage } from '@chakra-ui/react';

type CustomFormErrorMessageProps = {
  error?: string;
};
export default function CustomFormErrorMessage({
  error,
}: CustomFormErrorMessageProps) {
  return (
    <FormErrorMessage flex={1} alignSelf="flex-start" gap="5px">
      <MdError />
      {error ?? 'Undefined'}
    </FormErrorMessage>
  );
}

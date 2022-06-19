import React from 'react';

import { MdError } from 'react-icons/md';
import { FormErrorMessage, FormErrorMessageProps } from '@chakra-ui/react';

type CustomFormErrorMessageProps = {
  testId: string;
  error?: string;
} & FormErrorMessageProps;
export default function CustomFormErrorMessage({
  testId,
  error,
  ...props
}: CustomFormErrorMessageProps) {
  return (
    <FormErrorMessage
      data-test-id={testId}
      flex={1}
      alignSelf="flex-start"
      gap="5px"
      {...props}
    >
      <MdError />
      {error ?? 'Undefined'}
    </FormErrorMessage>
  );
}

import React from 'react';

import { MdError } from 'react-icons/md';
import { FormErrorMessage } from '@chakra-ui/react';

type CustomFormErrorMessageProps = {
  testId: string;
  error?: string;
};
export default function CustomFormErrorMessage({
  testId,
  error,
}: CustomFormErrorMessageProps) {
  return (
    <FormErrorMessage
      data-test-id={testId}
      flex={1}
      alignSelf="flex-start"
      gap="5px"
    >
      <MdError />
      {error ?? 'Undefined'}
    </FormErrorMessage>
  );
}

import React from 'react';

import { Icon } from '@src/common/components';
import {
  FormErrorMessage as CKFormError,
  FormErrorMessageProps as CKFormErrorProps,
} from '@chakra-ui/react';

type FormErrorMessageProps = {
  testId?: string;
  error?: string;
} & CKFormErrorProps;
export function FormErrorMessage({
  testId,
  error,
  ...props
}: FormErrorMessageProps) {
  return (
    <CKFormError
      data-test-id={testId}
      flex={1}
      alignSelf="flex-start"
      gap=".5rem"
      fontSize="1.6rem"
      {...props}
    >
      <Icon variant="error" />
      {error ?? 'Undefined'}
    </CKFormError>
  );
}

import React from 'react';

import { Textarea, TextareaProps } from '@chakra-ui/react';

type CustomTextareaProps = TextareaProps;

export default function CustomTextarea({ ...props }: CustomTextareaProps) {
  const variants = {
    default: (
      <Textarea
        variant="unstyled"
        border="1px solid #ADB2C6"
        minHeight="111"
        borderRadius="5"
        {...props}
      />
    ),
  };
  return variants.default;
}

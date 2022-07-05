import React from 'react';

import { Text } from '@common/components/';
import { VStack, Textarea, TextareaProps } from '@chakra-ui/react';

export type variantTypes = 'default';

type CustomTextareaProps = {
  label: string;
  variantType?: variantTypes;
} & TextareaProps;

export default function CustomTextarea({
  label,
  variantType = 'default',
  ...props
}: CustomTextareaProps) {
  const variants = {
    default: (
      <VStack>
        <Text type="p" alignSelf="flex-start">
          {label}
        </Text>
        <Textarea
          border="1px solid #ADB2C6"
          minHeight="111"
          borderRadius="5"
          {...props}
        />
      </VStack>
    ),
  };
  return variants[variantType];
}

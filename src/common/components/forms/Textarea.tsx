import React from 'react';

import { Text } from '@common/components/';
import { VStack, Textarea, TextareaProps } from '@chakra-ui/react';

export type variantTypes = 'default';

type CustomTextareaProps = {
  label: string;
  wordCount?: number;
  variantType?: variantTypes;
} & TextareaProps;

export default function CustomTextarea({
  label,
  variantType = 'default',
  wordCount,
  ...props
}: CustomTextareaProps) {
  const variants = {
    default: (
      <VStack>
        <Text type="p" alignSelf="flex-start">
          {label}
        </Text>
        <Textarea border="1px solid #ADB2C6" borderRadius="5" {...props} />
        <Text type="p" alignSelf="flex-end">
          {`${wordCount}/100`}
        </Text>
      </VStack>
    ),
  };
  return variants[variantType];
}

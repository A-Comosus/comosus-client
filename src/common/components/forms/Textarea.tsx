import React from 'react';

import { Text } from '@common/components/';
import { VStack, Textarea, TextareaProps } from '@chakra-ui/react';

export type variantTypes = 'default';

type CustomTextareaProps = {
  label: string;
  value: string;
  maxLength?: number;
  variantType?: variantTypes;
} & TextareaProps;

export default function CustomTextarea({
  label,
  value,
  maxLength = 100,
  variantType = 'default',
  ...props
}: CustomTextareaProps) {
  const variants = {
    default: (
      <VStack>
        <Text type="p" alignSelf="flex-start" color="#F8F5F1">
          {label}
        </Text>
        <Textarea
          border="1px solid #ADB2C6"
          borderRadius="5"
          value={value}
          maxLength={maxLength}
          color="#F8F5F1"
          {...props}
        />
        <Text type="p" alignSelf="flex-end" color="#F8F5F1">
          {`${value.length}/${maxLength}`}
        </Text>
      </VStack>
    ),
  };
  return variants[variantType];
}

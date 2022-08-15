import React from 'react';

import { VStack, Text, Textarea as CKTextarea } from '@chakra-ui/react';
import { useController } from 'react-hook-form';
import { isNil } from 'lodash';

type TextareaProps = {
  name: string;
  control: any;
  onBlur: () => void;
  maxLength?: number;
  label: string;
  placeholder?: string;
};

export function Textarea({
  label,
  name,
  control,
  onBlur,
  maxLength = 100,
  ...props
}: TextareaProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const handleOnBlur = () => {
    if (isNil(error)) {
      onBlur();
    }
  };

  return (
    <VStack align="stretch">
      <Text color="#ADB2C6" fontSize="1.2rem">
        {label}
      </Text>
      <CKTextarea
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
        border="0.1rem solid #ADB2C6"
        borderRadius="1rem"
        maxLength={maxLength}
        color="#F8F5F1"
        fontSize="1.6rem"
        _placeholder={{
          color: '#4F4F58',
        }}
        {...props}
      />
      <Text
        color="#ADB2C6"
        fontSize="1.2rem"
        textAlign="end"
      >{`${value.length}/${maxLength}`}</Text>
    </VStack>
  );
}

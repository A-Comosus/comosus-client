import React from 'react';
import { isNil } from 'lodash';
import { useController, Control } from 'react-hook-form';

import { Input, VStack } from '@chakra-ui/react';
import { Text } from '@common/components';

type EditableProfileInputProps = {
  placeholder: string;
  name: keyof EditableProfileFormType;
  label: string;
  control: Control<EditableProfileFormType, any>;
  onBlur: () => void;
};

export default function EditableProfileInput({
  placeholder,
  name,
  label,
  control,
  onBlur,
}: EditableProfileInputProps) {
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
    <VStack>
      <Text type="p" alignSelf="flex-start" color="#F8F5F1">
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
        variant="unstyled"
        borderBottom="1px solid #ADB2C6"
        borderRadius="0"
        color="#F8F5F1"
      />
    </VStack>
  );
}

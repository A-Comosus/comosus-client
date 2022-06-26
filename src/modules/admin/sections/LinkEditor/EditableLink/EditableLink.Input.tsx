import React from 'react';
import { isNil } from 'lodash';
import { useController, Control } from 'react-hook-form';

import { FormControl, Input, VStack, HStack } from '@chakra-ui/react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FormErrorMessage } from '@src/common/components';

type EditableLinkInputProps = {
  placeholder: string;
  name: keyof EditableLinkFormType;
  control: Control<EditableLinkFormType, any>;
  onBlur: () => void;
};

export default function EditableLinkInput({
  placeholder,
  name,
  control,
  onBlur,
}: EditableLinkInputProps) {
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
    <FormControl id="value" isInvalid={!isNil(error)}>
      <VStack align="stretch">
        <HStack align="center">
          <Input
            size="xs"
            placeholder={placeholder}
            autoComplete="off"
            value={value.toString()}
            onChange={onChange}
            onBlur={handleOnBlur}
            p={1}
            borderRadius={0}
            border="none"
            fontSize={12}
            _focus={{ border: 'none' }}
            _invalid={{ border: 'none', color: 'red.500' }}
          />
          <AiOutlineEdit />
        </HStack>
        {error && (
          <FormErrorMessage
            testId={`error-${name}`}
            error={error.message}
            fontSize="12px"
          />
        )}
      </VStack>
    </FormControl>
  );
}

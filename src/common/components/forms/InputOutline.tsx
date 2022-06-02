import { FormControl, Input, InputProps, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Controller, Control } from 'react-hook-form';
import { FormErrorMessage } from '@common/components';

type CustomerInputOutlineProps = {
  control: Control<any, any>;
  name: string;
} & InputProps;
export default function CustomInputOutline({
  control,
  name,
  ...props
}: CustomerInputOutlineProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <>
          <FormControl id={name} isInvalid={invalid}>
            <VStack>
              <Input id={name} {...props} {...field} borderRadius="15px" />
              {error && <FormErrorMessage error={error.message} />}
            </VStack>
          </FormControl>
        </>
      )}
    />
  );
}

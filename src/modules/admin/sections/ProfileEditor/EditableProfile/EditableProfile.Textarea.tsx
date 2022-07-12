import React from 'react';
import { isNil } from 'lodash';
import { useController, Control } from 'react-hook-form';

import { Textarea } from '@src/common/components';

type EditableProfileTextareaProps = {
  placeholder: string;
  name: keyof EditableProfileFormType;
  label: string;
  maxLength: number;
  control: Control<EditableProfileFormType, any>;
  onBlur: () => void;
};

export default function EditableProfileTextarea({
  placeholder,
  name,
  label,
  maxLength,
  control,
  onBlur,
}: EditableProfileTextareaProps) {
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
    <Textarea
      label={label}
      placeholder={placeholder}
      autoComplete="off"
      value={value.toString()}
      maxLength={maxLength}
      onChange={onChange}
      onBlur={handleOnBlur}
    />
  );
}

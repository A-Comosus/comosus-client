import React from 'react';
import * as _ from 'lodash';
import { Control, useController } from 'react-hook-form';
import { Switch } from '@chakra-ui/react';

type EditableLinkSwitchProps = {
  name: keyof EditableLinkFormType;
  control: Control<EditableLinkFormType, any>;
  onChange: () => void;
};
export default function EditableLinkSwitch({
  name,
  control,
  onChange,
}: EditableLinkSwitchProps) {
  const {
    field: { value, onChange: controlChange },
    formState: { errors },
  } = useController({ name, control });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    controlChange(event);
    if (_.isEmpty(errors)) {
      onChange();
    }
  };

  return (
    <Switch
      isChecked={value ? true : false}
      name={name}
      value={value.toString()}
      onChange={handleOnChange}
      colorScheme="orange"
    />
  );
}

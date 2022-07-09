import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useToggle } from '@src/utils/hooks';

import { FormControl, VStack } from '@chakra-ui/react';
import { Button } from '@src/common/components';

import Category from './OnboardingForm.Category';
import DisplayName from './OnboardingForm.DisplayName';

type OnboardingFormProps = {
  onSubmit: (value: OnboardingFormValues) => void;
  isOnboarding: boolean;
};

export default function OnboardingForm({
  onSubmit,
  isOnboarding,
}: OnboardingFormProps) {
  const { t } = useTranslation('onboarding');

  const [isDisplayNameFilled, toggleIsDisplayNameFilled] = useToggle();
  const {
    handleSubmit,
    control,
    getFieldState,
    watch,
    setValue,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      displayName: '',
      categoryId: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object({
        displayName: yup
          .string()
          .required(t('display-name.error.required'))
          .matches(/[a-z]/gi, t('display-name.error.invalid')),
        categoryId: yup.string().required(),
      }),
    ),
  });

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack align="stretch" gap="60px">
        <DisplayName name="displayName" control={control} />

        {!isDisplayNameFilled && (
          <Button
            isDisabled={!_.isNil(getFieldState('displayName').error)}
            onClick={() => {
              _.isNil(getFieldState('displayName').error) &&
                toggleIsDisplayNameFilled();
            }}
          >
            {t('continue')}
          </Button>
        )}

        {isDisplayNameFilled && (
          <>
            <Category
              value={watch('categoryId')}
              onChange={(value) =>
                setValue('categoryId', value, { shouldValidate: true })
              }
            />
            <Button
              isDisabled={!isValid}
              isLoading={isOnboarding}
              type="submit"
            >
              {t('continue')}
            </Button>
          </>
        )}
      </VStack>
    </FormControl>
  );
}

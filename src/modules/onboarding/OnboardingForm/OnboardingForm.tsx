import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useToggle } from '@src/utils/hooks';

import { FormControl, VStack } from '@chakra-ui/react';
import { Button, Text } from '@src/common/components';

import Category from './OnboardingForm.Category';
import DisplayName from './OnboardingForm.DisplayName';
import ReCaptcha from './OnboardingForm.ReCaptcha';

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
      recaptcha: false,
    },
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object({
        displayName: yup
          .string()
          .required(t('display-name.error.required'))
          .matches(/[a-z]/gi, t('display-name.error.invalid')),
        categoryId: yup.string().required(),
        recaptcha: yup.boolean().isTrue(),
      }),
    ),
  });

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack align="stretch" gap="60px">
        <VStack align="flex-start" gap={3}>
          <Text type="generic.h1">{t('heading.main')}</Text>
          <Text type="generic.h2">{t('heading.sub')}</Text>
        </VStack>

        <DisplayName name="displayName" control={control} />

        {!isDisplayNameFilled && (
          <Button
            isDisabled={!_.isNil(getFieldState('displayName').error)}
            onClick={() => {
              _.isNil(getFieldState('displayName').error) &&
                toggleIsDisplayNameFilled();
            }}
            data-testid="continue-btn"
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

            <ReCaptcha
              onChange={() =>
                setValue('recaptcha', true, { shouldValidate: true })
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

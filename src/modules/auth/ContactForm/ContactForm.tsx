import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { VStack, FormControl } from '@chakra-ui/react';
import { Icon, Input, Button, Text } from '@common/components';

type ContactFormPropsValues = {
  onSubmit: (values: ContactFormValuesTypes) => void;
  isLoading: boolean;
  isInvalid: boolean;
  emailSent: boolean;
};
export default function ContactForm({
  onSubmit,
  isLoading,
  isInvalid,
  emailSent,
}: ContactFormPropsValues) {
  const { t } = useTranslation('auth');

  const formValues = {
    inputs: [
      {
        type: 'text',
        name: 'customerName',
        placeholder: t('contact-form.page.customerName.placeholder'),
        leftElement: <Icon variant="account" />,
      },
      {
        type: 'email',
        name: 'email',
        placeholder: t('contact-form.page.email.placeholder'),
        leftElement: <Icon variant="email" />,
      },
      {
        type: 'number',
        name: 'phone',
        placeholder: t('contact-form.page.phone.placeholder'),
        leftElement: <Icon variant="phone" />,
      },
      {
        type: 'textarea',
        name: 'message',
        placeholder: t('contact-form.page.message.placeholder'),
        leftElement: <Icon variant="message" />,
      },
    ],
    defaultValues: {
      customerName: '',
      email: '',
      phone: '',
      message: '',
    },

    schema: yup
      .object({
        customerName: yup
          .string()
          .required(t('contact-form.page.customerName.error.required')),
        email: yup
          .string()
          .email()
          .required(t('contact-form.page.email.error.required')),
      })
      .required(),
  };

  const { handleSubmit, control } = useForm({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
    reValidateMode: 'onBlur',
  });

  return (
    <VStack minW="800px" padding="20px" align="stretch" gap="60px">
      <VStack align="stretch" width="380px">
        <Text type="generic.h1">{t('contact-form.page.title')}</Text>
      </VStack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <VStack align="stretch" gap="20px">
            {formValues.inputs.map(
              ({ type, name, placeholder, leftElement }, index) => {
                return (
                  <Input
                    key={index}
                    type={type}
                    name={name}
                    control={control}
                    placeholder={placeholder}
                    leftElement={leftElement}
                  />
                );
              },
            )}
            <Button type="submit" isLoading={isLoading}>
              {t('contact-form.page.button')}
            </Button>
            {emailSent && (
              <Text color=" #FF3F66">
                {t('contact-form.page.successMessage')}
              </Text>
            )}
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}

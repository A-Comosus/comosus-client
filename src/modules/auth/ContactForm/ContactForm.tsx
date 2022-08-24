import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { VStack, FormControl } from '@chakra-ui/react';
import { Icon, Input, Button, Text, Textarea } from '@common/components';

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
        label: 'Message',
        placeholder: t('contact-form.page.message.placeholder'),
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
    <VStack
      flex={1}
      align="stretch"
      w="clamp(62.5%, 60rem, 90%)"
      maxW="60rem"
      gap="6rem"
    >
      <Text type="generic.h1" whiteSpace="break-spaces">
        {t('contact-form.page.title')}
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <VStack align="stretch" gap="2rem">
            {formValues.inputs.map(
              ({ type, name, label, placeholder, leftElement }) =>
                type !== 'textarea' ? (
                  <Input
                    key={name}
                    type={type}
                    name={name}
                    control={control}
                    placeholder={placeholder}
                    leftElement={leftElement}
                  />
                ) : (
                  <Textarea
                    key={name}
                    name={name}
                    control={control}
                    label={label}
                    placeholder={placeholder}
                  />
                ),
            )}
            <Button
              type="submit"
              isLoading={isLoading}
              variant="accent"
              size="lg"
            >
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

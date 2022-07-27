import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  VStack,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { Input, Button, Text } from '@common/components';

type ContactFormPropsValues = {
  onSubmit: (values: ContactFormPropsValues) => void;
  isLoading: boolean;
  isInvalid: boolean;
};
export default function ContactForm({
  onSubmit,
  isLoading,
  isInvalid,
}: ContactFormPropsValues) {
  const { t } = useTranslation('auth');

  const formValues = {
    inputs: [
      {
        type: 'text',
        name: 'customerName',
      },
      {
        type: 'email',
        name: 'email',
      },
      {
        type: 'number',
        name: 'phone',
      },
      {
        type: 'textarea',
        name: 'message',
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
        <Text fontSize="32px" fontWeight="600">
          {t('contact-form.page.title')}
        </Text>
      </VStack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid}>
          <VStack align="stretch" gap="10px">
            <FormControl isRequired>
              <Flex gap="20px">
                <VStack align="stretch">
                  <FormLabel htmlFor="email">
                    {t('contact-form.page.customerName.label')}
                  </FormLabel>
                  <Input
                    id="customerName"
                    type="text"
                    width="370px"
                    name="customerName"
                    control={control}
                    border="0px"
                    bg="rgba(173, 178, 198, 0.2)"
                    placeholder={t(
                      'contact-form.page.customerName.placeholder',
                    )}
                  />
                </VStack>

                <VStack align="stretch">
                  <FormLabel htmlFor="email">
                    {t('contact-form.page.email.label')}
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    width="370px"
                    name="email"
                    control={control}
                    bg="rgba(173, 178, 198, 0.2)"
                    border="none"
                    placeholder={t('contact-form.page.email.placeholder')}
                  />
                </VStack>
              </Flex>
            </FormControl>

            <VStack align="stretch">
              <FormLabel htmlFor="phone">
                {t('contact-form.page.phone.label')}
              </FormLabel>
              <Input
                id="phone"
                type="number"
                name="phone"
                control={control}
                bg="rgba(173, 178, 198, 0.2)"
                border="none"
                placeholder={t('contact-form.page.phone.placeholder')}
              />
            </VStack>

            <Text mb="8px">{t('contact-form.page.message.label')}</Text>
            <Textarea
              size="sm"
              bg="rgba(173, 178, 198, 0.2)"
              border="0px"
              borderRadius="15px"
              placeholder={t('contact-form.page.message.placeholder')}
            />

            <Button
              bg="rgba(26, 32, 44)"
              boxShadow="0px 10px 10px rgba(26, 32, 44, 0.2)"
              width="400px"
              highlight
              type="submit"
              isLoading={isLoading}
            >
              {t('contact-form.page.button')}
            </Button>
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
}

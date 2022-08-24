import React, { useState } from 'react';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '@src/common/components';
import { ContactForm } from '@src/modules/auth';
import { useApiClient } from '@common/contexts';
import { useContactFormMutation } from '@generated/graphql.queries';
import { Center } from '@chakra-ui/react';

export default function SendContactForm() {
  const { t } = useTranslation('auth');
  const head = { title: t('contact-form.title') };
  const [emailSent, setEmailSent] = useState(false);

  const { gqlClient } = useApiClient();
  const {
    mutate: contactForm,
    error,
    isLoading: isSendingEmail,
  } = useContactFormMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        // @ts-ignore
        console.error(error);
      } else if (data) {
        setEmailSent(true);
      }
    },
  });
  const onSubmit = (values: ContactFormValuesTypes) => {
    contactForm({
      detail: {
        ...values,
      },
    });
  };
  return (
    <PageContainer head={head}>
      <Center>
        <ContactForm
          onSubmit={onSubmit}
          isInvalid={!isNil(error)}
          isLoading={isSendingEmail}
          emailSent={emailSent}
        />
      </Center>
    </PageContainer>
  );
}

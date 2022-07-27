import React from 'react';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '@src/common/components';
import { ContactForm } from '@src/modules/auth';
import { useRouter } from 'next/router';
import { useApiClient } from '@common/contexts';
import { useContactFormMutation } from '@generated/graphql.queries';
import { AppRoute } from '@src/constants/PageRoutes';

export default function SendContactForm() {
  const { t } = useTranslation('auth');
  const head = { title: t('contact-form.title') };
  const router = useRouter();

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
        router.push(AppRoute.Admin);
      }
    },
  });
  const onSubmit = (value: ContactFormPropsValues) => {
    contactForm({
      payload: {
        ...value,
      },
    });
  };
  return (
    <PageContainer head={head}>
      <ContactForm
        onSubmit={onSubmit}
        isInvalid={!isNil(error)}
        isLoading={isSendingEmail}
      />
    </PageContainer>
  );
}

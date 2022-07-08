import React from 'react';
import { useTranslation } from 'react-i18next';
import { useOnboardUserMutation } from '@generated/graphql.queries';
import { useApiClient, useUser } from '@src/common/contexts';
import { useRouter } from 'next/router';
import { AppRoute } from '@src/constants';

import { useToast, VStack } from '@chakra-ui/react';
import { PageContainer, Text } from '@src/common/components';
import { OnboardingForm } from '@src/modules/onboarding';

export default function Onboarding() {
  const { t } = useTranslation('onboarding');
  const head = { title: t('title') };

  const toast = useToast();
  const router = useRouter();

  const {
    user: { id },
  } = useUser();
  const { gqlClient } = useApiClient();
  const { mutate: onboardUser, isLoading: isOnboarding } =
    useOnboardUserMutation(gqlClient, {
      onSettled: () => {
        toast({
          status: 'success',
          description: t('api.success.message'),
          variant: 'subtle',
        });
        router.push(AppRoute.Admin);
      },
    });

  const onSubmit = (values: OnboardingFormValues) => {
    onboardUser({
      payload: {
        id,
        ...values,
      },
    });
  };

  return (
    <PageContainer head={head}>
      <VStack alignSelf="center" width="670px" align="stretch" gap="60px">
        <VStack align="flex-start" gap={3}>
          <Text type="h1">{t('heading.main')}</Text>
          <Text type="h2">{t('heading.sub')}</Text>
        </VStack>

        <OnboardingForm onSubmit={onSubmit} isOnboarding={isOnboarding} />
      </VStack>
    </PageContainer>
  );
}

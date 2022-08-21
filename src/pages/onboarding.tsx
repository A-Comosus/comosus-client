import React, { useEffect, useState } from 'react';
import { useToggle } from '@src/utils/hooks';
import { useTranslation } from 'react-i18next';
import {
  useOnboardUserMutation,
  useVerifyAccountSendEmailMutation,
} from '@generated/graphql.queries';
import { useApiClient } from '@src/common/contexts';
import { useRouter } from 'next/router';
import { GlobalRoute } from '@src/constants';

import { Center } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { OnboardedMessage, OnboardingForm } from '@src/modules/onboarding';

type OnboardingStaticProps = {
  query: { id: string };
};
export async function getServerSideProps(context: OnboardingStaticProps) {
  return { props: { id: context.query.id } };
}

type OnboardingProps = {
  id: string;
};
export default function Onboarding({ id }: OnboardingProps) {
  const { t } = useTranslation('onboarding');
  const head = { title: t('title') };

  const router = useRouter();
  const { gqlClient } = useApiClient();
  const [email, setEmail] = useState('');
  const [isOnboarded, toggleIsOnboarded] = useToggle();

  const { mutate: onboardUser, isLoading: isOnboarding } =
    useOnboardUserMutation(gqlClient, {
      onSettled: (data) => {
        if (data) {
          setEmail(data.onboardUser.email);
          toggleIsOnboarded();
        }
      },
    });

  const { mutate: verifyAccountSendEmail } = useVerifyAccountSendEmailMutation(
    gqlClient,
    {
      onSettled: (data, error) => {
        if (error) {
          console.error(error);
        }
        if (data) {
          // eslint-disable-next-line no-console
          console.log(data);
        }
      },
    },
  );

  useEffect(() => {
    if (typeof id !== 'string') router.push(GlobalRoute.Error);
  }, [id]);

  const onSubmit = (values: OnboardingFormValues) => {
    const { recaptcha, ...payload } = values;
    onboardUser({
      payload: {
        id: id as string,
        ...payload,
      },
    });
    verifyAccountSendEmail({
      detail: {
        id,
      },
    });
  };

  return (
    <PageContainer head={head} disableNavOptions>
      {/* <VStack alignSelf="center" width="670px" align="stretch" gap="60px"> */}
      <Center flex={1}>
        {isOnboarded ? (
          <OnboardedMessage email={email} />
        ) : (
          <OnboardingForm onSubmit={onSubmit} isOnboarding={isOnboarding} />
        )}
      </Center>
    </PageContainer>
  );
}

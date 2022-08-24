import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApiClient } from '@common/contexts';
import { useVerifyUserEmailMutation } from '@generated/graphql.queries';
import { useTranslation } from 'react-i18next';
import { Center } from '@chakra-ui/react';
import { PageContainer } from '@src/common/components';
import { VerifyAccount } from '@src/modules/auth';

export default function VerifyAccountPage() {
  const { gqlClient } = useApiClient();
  const { t } = useTranslation('auth');
  const head = { title: t('verify-account.title') };
  const router = useRouter();
  const {
    query: { userId },
  } = router;
  const id = userId as string;

  const { mutate: verifyUserEmail, isLoading: isVerifying } =
    useVerifyUserEmailMutation(gqlClient, {
      onSettled: (data) => {
        if (data) {
          // eslint-disable-next-line no-console
          console.log(data);
        }
      },
    });

  useEffect(() => {
    if (typeof id === 'string') {
      verifyUserEmail({
        detail: {
          id,
        },
      });
    }
  }, [id]);

  return (
    <PageContainer head={head}>
      <Center flex={1}>
        <VerifyAccount isVerifying={isVerifying} />
      </Center>
    </PageContainer>
  );
}

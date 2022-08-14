import React, { useMemo } from 'react';
import { useApiClient, useUser } from '@src/common/contexts';
import { useTranslation } from 'react-i18next';
import { useFindUserByUsernameQuery } from '@generated/graphql.queries';

import { Text } from '@common/components';
import { VStack, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import {
  AdminSectionContainer,
  AdminSectionItemCard,
} from '@src/modules/admin/components';
import EditableProfile from './EditableProfile/EditableProfile';
import _ from 'lodash';

export default function ProfileEditor() {
  const { t } = useTranslation('admin');
  const {
    user: { username },
  } = useUser();

  const enabled = useMemo(() => {
    return !_.isNil(username);
  }, [username]);
  const { gqlClient } = useApiClient();
  const { data: userData, isLoading } = useFindUserByUsernameQuery(
    gqlClient,
    { payload: { username } },
    {
      enabled,
      select: (data) => data.findUserByUsername,
    },
  );

  if (!username || isLoading || !userData) {
    return (
      <Box minWidth="670px" padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} gap="4" />
      </Box>
    );
  }

  return (
    <AdminSectionContainer heading="Profile Editor">
      <AdminSectionItemCard>
        <VStack align="flex-start">
          <Text type="section.title" color="#F8F5F1">
            {t('appearance.profile.title')}
          </Text>
          <EditableProfile profile={userData} />
        </VStack>
      </AdminSectionItemCard>
    </AdminSectionContainer>
  );
}

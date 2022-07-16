import React, { useMemo } from 'react';
import { useApiClient, useUser } from '@src/common/contexts';
import { useTranslation } from 'react-i18next';
import { useFindUserByUsernameQuery } from '@generated/graphql.queries';

import { Text } from '@common/components';
import { VStack, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
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
  const profile = {
    id: userData?.id,
    username: username,
    displayName: userData?.displayName,
    bio: userData?.bio,
  };

  if (!username || isLoading) {
    return (
      <Box minWidth="670px" padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} gap="4" />
      </Box>
    );
  }

  return (
    <VStack>
      <Text type="h3" alignSelf="flex-start">
        {t('appearance.profile.title')}
      </Text>
      <EditableProfile profile={profile} />
    </VStack>
  );
}

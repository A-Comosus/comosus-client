import React, { useMemo } from 'react';
import { Button } from '@common/components';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  HStack,
  VStack,
  Text,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useApiClient, useUser } from '@src/common/contexts';
import { useFindUserByUsernameQuery } from '@generated/graphql.queries';
import _ from 'lodash';

export default function AppearanceProfile() {
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

  return (
    <VStack
      px={35}
      py={25}
      backgroundColor="#FFFFFF"
      borderRadius="15px"
      width="670px"
      justify="center"
      align="center"
      spacing={25}
    >
      <HStack justifyContent="space-between" width="100%" spacing="63px">
        <Avatar
          marginLeft="35px"
          height="100px"
          width="100px"
          src="https://picsum.photos/200"
        />
        <HStack spacing="40px">
          <Button width="181px" borderRadius="10px">
            {t('appearance.profile.pick-an-image')}
          </Button>
          <Button width="181px" borderRadius="10px">
            {t('appearance.profile.remove')}
          </Button>
        </HStack>
      </HStack>

      <VStack width="100%" align="start">
        <Text fontSize="12px" fontWeight="400">
          {t('appearance.profile.profile-title')}
        </Text>
        {isLoading ? (
          <Input
            variant="unstyled"
            borderBottom="1px solid #ADB2C6"
            borderRadius="0"
            placeholder="..."
          />
        ) : (
          <Input
            variant="unstyled"
            borderBottom="1px solid #ADB2C6"
            borderRadius="0"
            placeholder={userData?.username}
          />
        )}
      </VStack>

      <VStack width="100%" align="start">
        <Text fontSize="12px" fontWeight="400">
          {t('appearance.profile.bio')}
        </Text>
        <Textarea
          variant="unstyled"
          border="1px solid #ADB2C6"
          minHeight="111"
          borderRadius="5"
          placeholder={t('appearance.profile.bio-placeholder')}
        />
      </VStack>
    </VStack>
  );
}

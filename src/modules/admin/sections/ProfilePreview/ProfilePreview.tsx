import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useApiClient, useUser } from '@src/common/contexts';
import { useFindUserByUsernameQuery } from '@generated/graphql.queries';

import {
  useDisclosure,
  HStack,
  IconButton,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Logo, Icon, Avatar, Text, ProfileItem } from '@src/common/components';
import SharePanel from './ProfilePreview.SharePanel';

export default function ProfilePreview() {
  const { t } = useTranslation('admin');
  const { user } = useUser();

  const { gqlClient } = useApiClient();
  const { data: userData, isLoading } = useFindUserByUsernameQuery(
    gqlClient,
    { payload: { username: user.username } },
    {
      enabled: !_.isNil(user.username),
      select: (data) => data.findUserByUsername,
    },
  );

  const { isOpen: isSharing, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack flex={1} justify="center" align="center" p="20px">
        <VStack
          position="relative"
          justify="space-between"
          overflowY="scroll"
          __css={{
            '&::-webkit-scrollbar': { display: 'none' },
          }}
          gap={20}
          border="5px solid #3B3C46"
          borderRadius="20px"
          p="10px"
          w="300px"
          h="550px"
          bgGradient="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <VStack alignSelf="stretch" gap={5}>
              <IconButton
                onClick={onOpen}
                aria-label={t('link.preview.share')}
                icon={<Icon variant="share-btn" />}
                position="absolute"
                top={5}
                right={2.5}
              />

              <VStack>
                <Avatar user={user} />
                <Text color="white">
                  {userData?.displayName || userData?.username}
                </Text>
                {userData?.bio && <Text color="white">{userData?.bio}</Text>}
              </VStack>

              <VStack alignSelf="stretch" align="stretch" gap={4}>
                {userData &&
                  userData.links.map((link, index) => {
                    return <ProfileItem key={index} link={link} />;
                  })}
              </VStack>
            </VStack>
          )}

          <Logo color="white" variant="inline" />
        </VStack>

        <HStack>
          <Icon variant="share" />
          <Text textDecoration="underline">
            <Link href={`/${userData?.username}`} passHref>
              <a target="_blank" rel="noreferrer">
                {t('link.preview.share')}
              </a>
            </Link>
          </Text>
        </HStack>
      </VStack>
      {isSharing && <SharePanel isOpen={isSharing} onClose={onClose} />}
    </>
  );
}

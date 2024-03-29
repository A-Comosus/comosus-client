import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useApiClient, useUser } from '@src/common/contexts';
import { useFindUserByUsernameQuery } from '@generated/graphql.queries';

import { HStack, IconButton, Spinner, VStack, Center } from '@chakra-ui/react';
import Link from 'next/link';
import {
  Logo,
  Icon,
  Avatar,
  Text,
  ProfileItem,
  Button,
} from '@src/common/components';
import SharePanel from './ProfilePreview.SharePanel';
import { useToggle } from '@src/utils/hooks';

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

  const [isPreview, togglePreview] = useToggle();
  const [isSharing, toggleSharing] = useToggle();

  return (
    <>
      <Center
        zIndex={999}
        position="absolute"
        bottom="0"
        display={['flex', 'none']}
        pb="2rem"
        w="100%"
      >
        <Button flex={0.4} onClick={togglePreview}>
          Open Preview
        </Button>
      </Center>
      <VStack
        position={isPreview ? 'absolute' : 'relative'}
        display={isPreview ? 'flex' : ['none', 'flex']}
        flex={1}
        justify="center"
        p="2rem"
        w="100%"
        borderLeft={['none', '.1rem solid #4F4F58']}
      >
        <VStack
          position="relative"
          justify="space-between"
          overflowY="scroll"
          __css={{
            '&::-webkit-scrollbar': { display: 'none' },
          }}
          gap="2rem"
          border="5px solid #3B3C46"
          borderRadius="20px"
          p="10px"
          w="300px"
          h="550px"
          bgGradient="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
        >
          {isLoading ? (
            <Center flex={1}>
              <Spinner size="xl" />
            </Center>
          ) : (
            <VStack alignSelf="stretch" gap={5}>
              <IconButton
                onClick={toggleSharing}
                aria-label={t('link.preview.share')}
                icon={<Icon variant="share-btn" />}
                position="absolute"
                top={5}
                right={2.5}
                color="#3B3C46"
                fontSize="1.6rem"
              />

              <VStack>
                <Avatar user={user} size="xl" />
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

          <Logo variant="inline" />
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
      {isSharing && <SharePanel isOpen={isSharing} onClose={toggleSharing} />}
    </>
  );
}

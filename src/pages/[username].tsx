import React from 'react';
import { request } from 'graphql-request';

import { Center, VStack } from '@chakra-ui/react';
import { Avatar, Text, ProfileItem, Logo } from '@src/common/components';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

type ServerSideContextType = { query: { username: string } };
export async function getServerSideProps(context: ServerSideContextType) {
  const { username } = context.query;

  const gqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '';

  try {
    const { findUserByUsername } = await request(
      gqlEndpoint,
      `
      query FindByUsername($payload: FindUserByUsernameInput!) {
        findUserByUsername(username: $payload) {
          id
          avatarUrl
          username
          displayName
          bio
          links {
            id
            type
            title
            url
            logoUrl
          }
        }
      }
      `,
      { payload: { username } },
    );
    return {
      props: { userData: findUserByUsername }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

type PublicProfileProps = {
  userData: {
    id: string;
    avatarUrl?: string;
    username: string;
    displayName?: string;
    bio?: string;
    links: {
      id: string;
      type: string;
      title: string;
      url: string;
    }[];
  };
};
export default function PublicProfile({ userData }: PublicProfileProps) {
  const { t } = useTranslation();

  const title = `${userData.displayName} | ${t('site.title')}`;
  const url = `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/${userData.username}`;
  const metas = [
    { property: 'og:title', content: title ?? t('site.title') },
    {
      property: 'og:description',
      content: userData.bio ?? t('site.description'),
    },
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'profile:username',
      content: userData.username,
    },
  ];

  return (
    <>
      <Head>
        <title>{`${userData.displayName} | ${t('site.title')}`}</title>
        {metas &&
          metas.map(({ property, content }, index) => (
            <meta key={index} property={property} content={content} />
          ))}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
      </Head>

      <Center
        p={{
          base: '1rem 0.5rem',
          sm: '6rem 0',
        }}
        minH="100vh"
        bgGradient="linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%)"
        alignItems="stretch"
      >
        <VStack flex={1} justify="space-between" gap="60px" maxW="670px">
          <VStack alignSelf="stretch" align="stretch" gap={5}>
            <VStack>
              <Avatar user={userData} />
              <Text color="white">
                {userData?.displayName ?? userData?.username}
              </Text>
            </VStack>

            <VStack align="stretch" gap={4}>
              {userData &&
                userData.links.map((link, index) => (
                  <ProfileItem key={index} link={link} />
                ))}
            </VStack>
          </VStack>

          <Logo variant="inline" />
        </VStack>
      </Center>
    </>
  );
}

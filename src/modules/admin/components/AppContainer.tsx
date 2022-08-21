import React from 'react';
import { UserProvider } from '@src/common/contexts';

import Head from 'next/head';
import { ColorModeScript, Flex, Stack, VStack } from '@chakra-ui/react';
import { Sidebar } from '@common/components';
import { ProfilePreview } from '../sections';

type PageContainerProps = {
  children: React.ReactNode;
  head: Head;
  disableProfilePreview?: boolean;
};

export default function PageContainer({
  children,
  head,
  disableProfilePreview,
}: PageContainerProps) {
  const { title, metas, links } = head;

  return (
    <UserProvider>
      <Flex
        direction={['column', 'row']}
        minH="100vh"
        gap="0.1rem"
        align="stretch"
      >
        <Head>
          <title>{title}</title>
          {metas &&
            metas.map(({ name, content }, index) => (
              <meta key={index} name={name} content={content} />
            ))}
          {links &&
            links.map(({ rel, href }, index) => (
              <link key={index} rel={rel} href={href} />
            ))}
        </Head>
        <ColorModeScript />
        <Sidebar />
        <Stack
          direction={['column', 'row']}
          flex={1}
          align="stretch"
          spacing="0"
        >
          <VStack
            flex={1.5}
            p={['6rem 1rem 7rem', '8rem 5.5rem']}
            maxH="100vh"
            overflowY="scroll"
            __css={{
              '&::-webkit-scrollbar': {
                width: '.3rem',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#ADB2C6',
              },
            }}
          >
            <VStack
              alignItems="stretch"
              spacing="4rem"
              gap="4rem"
              w="clamp(62.5%, 68rem, 90%)"
              maxW="68rem"
            >
              {children}
            </VStack>
          </VStack>
          {disableProfilePreview ? null : <ProfilePreview />}
        </Stack>
      </Flex>
    </UserProvider>
  );
}

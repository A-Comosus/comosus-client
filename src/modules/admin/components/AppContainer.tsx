import React from 'react';
import { UserProvider } from '@common/contexts';

import Head from 'next/head';
import { ColorModeScript, Flex } from '@chakra-ui/react';
import { Sidebar } from '@common/components';
import { ProfilePreview } from '../sections';

type PageContainerProps = {
  children: React.ReactNode;
  head: Head;
  includeProfilePreview?: boolean;
};

export default function PageContainer({
  children,
  head,
  includeProfilePreview,
}: PageContainerProps) {
  const { title, metas, links } = head;

  return (
    <UserProvider>
      <Flex h="100vh" align="stretch" overflow="hidden" bg="#F5F6F8">
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
        {children}
        {includeProfilePreview ? <ProfilePreview /> : null}
      </Flex>
    </UserProvider>
  );
}

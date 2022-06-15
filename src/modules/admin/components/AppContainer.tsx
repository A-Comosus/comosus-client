import React from 'react';
import { UserProvider } from '@common/contexts';

import Head from 'next/head';
import { ColorModeScript, Flex } from '@chakra-ui/react';
import { Sidebar } from '@common/components';

type PageContainerProps = {
  children: React.ReactNode;
  head: Head;
};

export default function PageContainer({ children, head }: PageContainerProps) {
  const { title, metas, links } = head;

  return (
    <UserProvider>
      <Flex minH="100vh" align="stretch">
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
      </Flex>
    </UserProvider>
  );
}

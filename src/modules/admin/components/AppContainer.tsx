import React from 'react';

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
    </Flex>
  );
}

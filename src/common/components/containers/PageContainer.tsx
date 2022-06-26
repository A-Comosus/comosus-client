import React from 'react';

import Head from 'next/head';
import { ColorModeScript, Flex } from '@chakra-ui/react';
import { Footer, NavBar } from '@common/components';

type PageContainerProps = {
  children: React.ReactNode;
  head: Head;
};

export default function PageContainer({ children, head }: PageContainerProps) {
  const { title, metas, links } = head;

  return (
    <Flex direction="column" justify="space-between" minH="100vh">
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
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
}

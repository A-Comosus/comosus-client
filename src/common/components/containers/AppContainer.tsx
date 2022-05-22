import React from 'react';

import Head from 'next/head';
import { ColorModeScript, Flex } from '@chakra-ui/react';
import { Footer, NavBar } from '@common/components';

type AppContainerProps = {
  children: React.ReactNode;
  head: {
    title: string;
    metas?: {
      name: string;
      content: string;
    }[];
    links?: {
      rel: string;
      href: string;
    }[];
  };
};

export default function AppContainer({ children, head }: AppContainerProps) {
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

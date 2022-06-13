import React from 'react';
import { UserProvider } from '@common/contexts';

import Head from 'next/head';
import { Box, ColorModeScript, Flex } from '@chakra-ui/react';

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
        <SideBar />
        {children}
      </Flex>
    </UserProvider>
  );
}

const SideBar = () => {
  return (
    <Box
      borderRadius="10px"
      m="10px"
      minW="210px"
      bgGradient={'linear-gradient(180deg, #465E79 0%, #4B3F4F 97.92%);'}
    />
  );
};

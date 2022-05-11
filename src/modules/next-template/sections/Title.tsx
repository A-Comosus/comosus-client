import { Link, Text } from '@src/common/components';
import React from 'react';

export default function Title() {
  return (
    <>
      <Text type="h1">
        {'Welcome to '}
        <Link href="https://nextjs.org">
          <Text type="a">Next.js!</Text>
        </Link>
      </Text>
    </>
  );
}

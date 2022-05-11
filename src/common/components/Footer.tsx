import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import { Link } from '@common/components';

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & span {
    height: 1em;
    margin-left: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'Powered by '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </Link>
    </StyledFooter>
  );
}

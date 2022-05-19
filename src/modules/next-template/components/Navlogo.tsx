import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 90px;
  display: flex;
  margin-left: 2rem;
  cursor: pointer;
`;

function NavLogo() {
  return (
    <Link href="/" passHref>
      <Nav>
        <div className="logo">
          <Image src="/logo.png" width={206} height={58.86} />
        </div>
      </Nav>
    </Link>
  );
}

export default NavLogo;

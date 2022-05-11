import styled from 'styled-components';

export const Heading1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export const Heading2 = styled.h2``;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Link = styled.a`
  color: #0070f3;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

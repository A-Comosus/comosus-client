import styled from 'styled-components';

export default function Button({ content }: any) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #f6486c;
  letter-spacing: 0.1rem;
  font-weight: bold;
  width: 100%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  border-radius: 0.7rem;
  margin-top: 2rem;
  &:hover {
    background: #6344c6;
  }
`;

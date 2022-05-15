import styled from 'styled-components';
export default function Input({ type, placeholder }: any) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: #f5f6f8;
  border-radius: 0.7rem;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  margin-bottom: 12px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.14rem #000;
    backdrop-filter: blur(12rem);
    border-radius: 0.7rem;
  }
`;

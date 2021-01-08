import styled from "styled-components";

export const Button = styled.button`
  background: #fff;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: ${({ clicked }) =>
    !clicked ? "0 16px 32px 0 rgba(102, 138, 165, 0.4)" : "initial"};
  margin-bottom: 0.7rem;
  &:focus {
    outline: none;
  }
  ${({ clicked }) => clicked && `background: rgba(15,92,121,0.13)`};
`;

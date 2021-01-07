import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const translate = keyframes`
  from {
    margin-left: -70px;
  }
  to {
    margin-left: calc(100% + 600px);
  }
`;

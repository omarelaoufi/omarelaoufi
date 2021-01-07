import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
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

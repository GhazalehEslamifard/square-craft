import styled from "@emotion/styled";

import { ISquare } from "@types";

export const StyledSquare = styled.div<ISquare>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => `${borderRadius}%`};
`;

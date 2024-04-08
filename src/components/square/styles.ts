import styled from "@emotion/styled";

export const StyledSquare = styled.div<{
  borderRadius: number;
  backgroundColor: string;
  size: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => `${borderRadius}%`};
`;

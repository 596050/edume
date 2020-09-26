import React, { ReactNode } from "react";
import styled, { withTheme } from "styled-components";

import { ThemeType } from "../../util";

type Sizes = {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
};

type StyledDivType = {
  isFullHeight: boolean;
  width: string;
};

type Props = {
  children: ReactNode;
  theme: ThemeType;
  isFullHeight?: boolean;
  size?: "small" | "medium" | "large" | "extraLarge";
};

const StyledDiv = styled.main`
  margin: auto;
  width: 100%;
  border: none;
  height: ${({ isFullHeight }: StyledDivType) =>
    isFullHeight ? "100%" : "auto"};
  max-width: ${({ width }: StyledDivType) => width};
  position: relative;
  background: ${({ theme }) => theme.colors.foregroundGrey};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Wrapper = ({
  size = "extraLarge",
  children,
  theme,
  isFullHeight = true,
}: Props) => {
  const wrapperSizeMap: Sizes = {
    small: theme.wrappers.small,
    medium: theme.wrappers.medium,
    large: theme.wrappers.large,
    extraLarge: theme.wrappers.extraLarge,
  };
  return (
    <StyledDiv width={wrapperSizeMap[size]} isFullHeight={isFullHeight}>
      {children}
    </StyledDiv>
  );
};

export default withTheme(Wrapper);

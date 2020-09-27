import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const Container = styled(Flex)`
  width: 100%;
  max-width 700px; 
  flex-direction: column;
  justify-content: center;
  margin:auto;
  align-items: center;
  padding: 20px;
  border-radius: ${({ theme }) => theme.display.borderRadius};
  overflow: scroll;
`;

export const SubmitButton = styled.button`
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.display.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.display.borderRadius};
  border: none;
  height: ${({ theme }) => theme.spacers.size24};
  cursor: pointer;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: ${({ theme }) => theme.colors.baseExtraLight};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.baseLight};
  }
`;

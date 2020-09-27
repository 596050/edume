import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const KeyboardBackground = styled.div`
  background-color: #d3d3d3;
  padding: 5px;
  & > div:not(:last-child) {
    margin-bottom: 5px;
  }
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const KeyboardRow = styled(Flex)`
  & > button:not(:last-child) {
    margin-right: 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const KeyboardButton = styled.button<{ maxWidth?: number }>`
  user-select: none;
  width: ${({ maxWidth }) => maxWidth || 40}px;
  max-width: ${({ maxWidth }) => maxWidth || 40}px;
  color: black;
  box-shadow: 0 0 1px -1px rgba(0, 0, 0, 0.3);
  font-size: 15px;
  height: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px;
  background: #fff;
  border: none;
  border-bottom: 1px solid #b5b5b5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:active {
    background: #efefef;
  }
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2),
    0px 2px 3px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

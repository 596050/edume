import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const TextAreaContainer = styled.div`
  transition: background 0.3s ease-in-out;
  background: #2e2e2e;
  border: 20px solid rgba(0, 0, 0, 0.1);
  height: 200px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
`;
export const TextArea = styled.textarea`
  box-sizing: border-box;
  padding: 20px;
  color: hsla(0, 0%, 100%, 0.9);
  background: 0 0;
  border: none;
  outline: 0;
  font-family: monospace;
  width: 100%;
  height: 100%;
  font-size: 18px;
  overflow: auto;
  resize: none;
`;

export const KeyboardBackground = styled.div`
  background-color: #d3d3d3;
  padding: 5px;
  & > div:not(:last-child) {
    margin-bottom: 5px;
  }
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
`;

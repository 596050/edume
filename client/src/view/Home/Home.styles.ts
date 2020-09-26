import styled from "styled-components";
import { Flex } from "@rebass/grid";

export const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  max-width 700px; 
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  padding: 20px;
  border-radius: ${({ theme }) => theme.display.borderRadius};
`;

export const SubmitButton = styled.button`
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.display.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.display.borderRadius};
  border: none;
`;

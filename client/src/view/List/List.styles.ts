import { Flex } from "@rebass/grid";
import styled from "styled-components";

export const ListContainer = styled(Flex)`
  margin: ${({ theme }) => theme.spacers.size16};
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacers.size24};
  max-height: 150px;
  overflow: auto;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const ListItem = styled(Flex)<{ index: number }>`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ index, theme }) =>
    index % 2 === 0 ? "#D3D3D3" : theme.colors.foreground};
`;

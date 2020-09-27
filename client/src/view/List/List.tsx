import React from "react";
import { Box } from "@rebass/grid";

import { useGlobalContext } from "../../context";
import { ListContainer, ListItem } from "./List.styles";

const List = () => {
  const { state } = useGlobalContext();

  return (
    <Box width="100%" pt={20}>
      Filtered words
      <ListContainer>
        {state?.wordList?.length
          ? (state?.wordList?.sort() || []).map((word, index) => {
              return (
                <ListItem index={index} key={word}>
                  {word}
                </ListItem>
              );
            })
          : "-"}
      </ListContainer>
      Permutations
      <ListContainer>
        {state?.permutations?.length
          ? (state?.permutations?.sort() || []).map((word, index) => {
              return (
                <ListItem index={index} key={word}>
                  {word}
                </ListItem>
              );
            })
          : "-"}
      </ListContainer>
    </Box>
  );
};

export default List;

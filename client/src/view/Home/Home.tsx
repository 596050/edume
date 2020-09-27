import React from "react";
import { Box, Flex } from "@rebass/grid";

import { postCalculation } from "../../api";
import { Keyboard, TextArea, useKeyboard, Wrapper } from "../../component";
import { useGlobalContext } from "../../context";
import List from "../List/List";
import { Container, SubmitButton } from "./Home.styles";

const Home = () => {
  const { state, setState } = useGlobalContext();
  const { output, buttonSymbols, handleKeyboardButtonClick } = useKeyboard();

  const handlePostCalculation = () => {
    const input = state?.currentBuffer?.split("") || [];
    if (!input.length) return;
    postCalculation({
      body: {
        input,
      },
    }).then((res: { words: string[]; permutations: string[] }) => {
      if (setState) {
        setState({
          wordList: res?.words || [],
          permutations: res?.permutations || [],
        });
      }
    });
  };

  return (
    <Wrapper>
      <Container>
        <Box width="100%">
          <TextArea value={output} />

          <Keyboard
            buttonSymbols={buttonSymbols}
            handleKeyboardButtonClick={handleKeyboardButtonClick}
          />
        </Box>
        <SubmitButton onClick={handlePostCalculation}>
          {state?.currentBuffer?.length
            ? `Submit for ${state?.currentBuffer}`
            : "Nothing to submit"}
        </SubmitButton>
        <List />
      </Container>
    </Wrapper>
  );
};

export default Home;

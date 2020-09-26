import React from "react";
import { Keyboard, Wrapper } from "../../component";

import { Container, SubmitButton } from "./Home.styles";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Keyboard />
        <SubmitButton>submit</SubmitButton>
      </Container>
    </Wrapper>
  );
};

export default Home;

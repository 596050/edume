import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@rebass/grid";

import {
  KeyboardBackground,
  KeyboardButton,
  KeyboardRow,
  TextArea,
  TextAreaContainer,
} from "./Keyboard.styles";

export const getDefaultLayout = () => {
  return {
    default: ["1 2 3", "4 5 6", "7 8 9", "0 _ <"],
  };
};

const getKeyboardButtons = (): string[][] => {
  return getDefaultLayout().default.map((keyRows) => keyRows.split(" "));
};

const Keyboard = () => {
  const [buffer, setBuffer] = useState("");
  const [output, setOutput] = useState("");
  const buttonSymbols = useMemo(() => getKeyboardButtons(), []);

  useEffect(() => {
    let processedBuffer = output;
    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i] === "_") {
        processedBuffer += " ";
      } else if (buffer[i] === "<") {
        processedBuffer = processedBuffer.slice(0, -1);
      } else {
        processedBuffer += buffer[i];
      }
    }
    setOutput(processedBuffer);
    setBuffer("");
  }, [buffer]);

  const handleKeyboardButtonClick = (buttonSymbol: string) => {
    setBuffer((current) => current + buttonSymbol);
  };

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <TextAreaContainer>
        <TextArea disabled maxLength={800} value={output} />
      </TextAreaContainer>
      <KeyboardBackground>
        {buttonSymbols?.map((buttonRow, index) => {
          return (
            <KeyboardRow key={`KeyboardRow${index}`}>
              {buttonRow?.map((buttonSymbol, index) => {
                return (
                  <KeyboardButton
                    key={`KeyboardButton${index}`}
                    onClick={() => handleKeyboardButtonClick(buttonSymbol)}
                  >
                    {buttonSymbol}
                  </KeyboardButton>
                );
              })}
            </KeyboardRow>
          );
        })}
      </KeyboardBackground>
    </Box>
  );
};

export default Keyboard;

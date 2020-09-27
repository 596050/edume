import React from "react";

import { Button } from "./Keyboard.helpers";
import {
  KeyboardBackground,
  KeyboardButton,
  KeyboardRow,
} from "./Keyboard.styles";

type KeyboardProps = {
  buttonSymbols: Button[][];
  handleKeyboardButtonClick: (buttonSymbol: string) => void;
};

const Keyboard = ({
  buttonSymbols,
  handleKeyboardButtonClick,
}: KeyboardProps) => {
  return (
    <KeyboardBackground>
      {buttonSymbols?.map((buttonRow, index) => {
        return (
          <KeyboardRow key={`KeyboardRow${index}`}>
            {(buttonRow || [])?.map((buttonSymbol, index: number) => {
              const symbol = Object.keys(buttonSymbol)[0];
              const values = buttonSymbol[symbol];
              return (
                <KeyboardButton
                  key={`KeyboardButton${index}`}
                  onClick={() => handleKeyboardButtonClick(symbol)}
                >
                  <div>{symbol}</div>
                  <div>{values.children}</div>
                </KeyboardButton>
              );
            })}
          </KeyboardRow>
        );
      })}
    </KeyboardBackground>
  );
};

export default Keyboard;

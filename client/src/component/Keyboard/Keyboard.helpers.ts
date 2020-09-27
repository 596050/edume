import { useEffect, useState } from "react";

import { useGlobalContext } from "../../context";

export type Button = {
  [key in string]: {
    children: string;
  };
};

const keyboardButtons: Button[][] = [
  [
    {
      "1": {
        children: "",
      },
    },
    { "2": { children: "abc" } },
    { "3": { children: "def" } },
  ],
  [
    { "4": { children: "ghi" } },
    { "5": { children: "jkl" } },
    { "6": { children: "mno" } },
  ],
  [
    { "7": { children: "pqrs" } },
    { "8": { children: "tuv" } },
    { "9": { children: "wxyz" } },
  ],
  [
    { "0": { children: "" } },
    { _: { children: "" } },
    { "<": { children: "" } },
  ],
];

type UseKeyboardReturn = {
  output: string;
  buttonSymbols: Button[][];
  handleKeyboardButtonClick: (buttonSymbol: string) => void;
};

const useKeyboard = (): UseKeyboardReturn => {
  const { setState } = useGlobalContext();
  const [buffer, setBuffer] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const buttonSymbols: typeof keyboardButtons = keyboardButtons;

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

    const splitProcessedBuffer = processedBuffer.split(" ");
    setState &&
      setState((prevState: any) => ({
        ...prevState,
        currentBuffer: splitProcessedBuffer[splitProcessedBuffer.length - 1],
      }));
    setBuffer("");
  }, [buffer, output, setState]);

  const handleKeyboardButtonClick = (buttonSymbol: string) => {
    setBuffer((current) => current + buttonSymbol);
  };

  return {
    output,
    buttonSymbols,
    handleKeyboardButtonClick,
  };
};

export default useKeyboard;

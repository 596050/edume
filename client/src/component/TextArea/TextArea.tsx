import React from "react";

import { TextAreaContainer, TextAreaInner } from "./TextArea.styles";

type TextAreaProps = {
  value: string;
};

const TextArea = ({ value }: TextAreaProps) => {
  return (
    <TextAreaContainer>
      <TextAreaInner disabled maxLength={800} value={value} />
    </TextAreaContainer>
  );
};

export default TextArea;

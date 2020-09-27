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
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const TextAreaInner = styled.textarea`
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

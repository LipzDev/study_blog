import React, { useState } from "react";
import * as S from "./styles";

export type TextareaProps = {
  isFocused?: boolean;
  placeholder?: string;
  value?: any;
};

const Input = ({ placeholder, value }: TextareaProps) => {
  const [focus, setFocus] = useState(false);
  const [valueState, setValueState] = useState("");

  return (
    <S.Wrapper
      isFocused={
        focus || (valueState !== "" && valueState !== undefined) || value
      }
    >
      <label>{placeholder}</label>
      <textarea
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValueState(e.target.value)}
      ></textarea>
    </S.Wrapper>
  );
};

export default Input;

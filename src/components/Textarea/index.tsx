import React, { useState } from "react";
import * as S from "./styles";

export type TextareaProps = {
  isFocused?: boolean;
  placeholder?: string;
};

const Input = ({ placeholder }: TextareaProps) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <S.Wrapper isFocused={focus || (value !== "" && value !== undefined)}>
      <label>{placeholder}</label>
      <textarea
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </S.Wrapper>
  );
};

export default Input;

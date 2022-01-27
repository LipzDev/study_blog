import React, { useState } from "react";
import * as S from "./styles";

export type InputProps = {
  isFocused?: boolean;
  placeholder?: string;
};

const Input = ({ placeholder }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <S.Wrapper isFocused={focus || (value !== "" && value !== undefined)}>
      <label>{placeholder}</label>
      <input
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </S.Wrapper>
  );
};

export default Input;

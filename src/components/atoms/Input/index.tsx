import React, { useState } from "react";
import * as S from "./styles";

export type InputProps = {
  isFocused?: boolean;
  placeholder?: string;
  value?: any;
};

const Input = ({ placeholder, value }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [valueState, setValueState] = useState("");

  return (
    <S.Wrapper
      isFocused={
        focus || (valueState !== "" && valueState !== undefined) || value
      }
    >
      <label>{placeholder}</label>
      <input
        value={value}
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValueState(e.target.value)}
      ></input>
    </S.Wrapper>
  );
};

export default Input;

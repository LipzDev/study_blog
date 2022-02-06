/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import * as S from "./styles";

export type InputProps = {
  isFocused?: boolean;
  placeholder?: string;
  setValueToForm?: any;
  value?: any;
};

const Input = ({ placeholder, value, setValueToForm }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [valueState, setValueState] = useState(value);

  return (
    <S.Wrapper
      isFocused={
        focus || (valueState !== "" && valueState !== undefined) || valueState
      }
    >
      <label>{placeholder}</label>
      <input
        value={valueState}
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => (
          setValueState(e.target.value), setValueToForm(e.target.value)
        )}
      ></input>
    </S.Wrapper>
  );
};

export default Input;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import * as S from "./styles";

export type TextareaProps = {
  isFocused?: boolean;
  placeholder?: string;
  setValueToForm?: any;
  value?: any;
};

const Input = ({ placeholder, value, setValueToForm }: TextareaProps) => {
  const [focus, setFocus] = useState(false);
  const [valueState, setValueState] = useState(value);

  return (
    <S.Wrapper
      isFocused={
        focus || (valueState !== "" && valueState !== undefined) || valueState
      }
    >
      <label>{placeholder}</label>
      <textarea
        value={valueState}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => (
          setValueState(e.target.value), setValueToForm(e.target.value)
        )}
      ></textarea>
    </S.Wrapper>
  );
};

export default Input;

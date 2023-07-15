/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import * as S from "./styles";

export type InputProps = {
  isFocused?: boolean;
  placeholder?: string;
  setValueToForm?: any;
  initialValue?: any;
  required?: boolean;
};

const Input = ({
  placeholder,
  initialValue,
  setValueToForm,
  required,
}: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [valueState, setValueState] = useState(initialValue);
  const [newValue, setNewValue]: any = useState("");

  useEffect(() => {
    setValueToForm(valueState, newValue);
  }, [setValueToForm, newValue, valueState]);

  return (
    <S.Wrapper
      isFocused={
        focus || (valueState !== "" && valueState !== undefined) || valueState
      }
    >
      <label>
        {required ? (
          <>
            {placeholder} <span>*</span>
          </>
        ) : (
          placeholder
        )}
      </label>
      <input
        value={valueState}
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => (
          setValueState(e.target.value), setNewValue(e.target.value)
        )}
      ></input>
    </S.Wrapper>
  );
};

export default Input;

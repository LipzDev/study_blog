/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import * as S from "./styles";

export type TextareaProps = {
  isFocused?: boolean;
  required?: boolean;
  placeholder?: string;
  setValueToForm?: any;
  initialValue?: any;
};

const Textarea = ({
  placeholder,
  initialValue,
  required,
  setValueToForm,
}: TextareaProps) => {
  const [focus, setFocus] = useState(false);
  const [valueState, setValueState] = useState(initialValue);
  const [newValue, setNewValue] = useState("");

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
      <textarea
        value={valueState}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => (
          setValueState(e.target.value), setNewValue(e.target.value)
        )}
      ></textarea>
    </S.Wrapper>
  );
};

export default Textarea;

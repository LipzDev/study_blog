/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import * as S from "./styles";

export type SearchBar = {
  isFocused?: boolean;
  onChange?: (e: any) => void;
  value?: string;
};

const SearchBar = ({ onChange, value }: SearchBar) => {
  const [focus, setFocus] = useState(false);

  return (
    <S.Wrapper isFocused={focus || (value !== "" && value !== undefined)}>
      <label>Pesquisar</label>
      <input
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
      ></input>
      <button>
        <ReactSVG src="/icons/lupe.svg" alt="Icon" wrapper="span" />
      </button>
    </S.Wrapper>
  );
};

export default SearchBar;

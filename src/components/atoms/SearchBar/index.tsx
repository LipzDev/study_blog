import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import * as S from "./styles";

export type SearchBar = {
  isFocused?: boolean;
};

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <S.Wrapper isFocused={focus || (value !== "" && value !== undefined)}>
      <label>Pesquisar</label>
      <input
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button>
        <ReactSVG src="/icons/lupe.svg" alt="Icon" wrapper="span" />
      </button>
    </S.Wrapper>
  );
};

export default SearchBar;

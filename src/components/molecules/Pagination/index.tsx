/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as S from "./styles";

type PaginationProps = {
  setShowContent: (num: number) => void;
  showContent: number;
  disableBtn: boolean;
};

const Pagination = ({
  setShowContent,
  showContent,
  disableBtn,
}: PaginationProps) => {
  return (
    <S.Container>
      <S.Pagination disableBtn={disableBtn}>
        <button
          disabled={disableBtn}
          className="next"
          onClick={() => setShowContent(showContent + 1)}
        >
          Carregar mais
        </button>
      </S.Pagination>
    </S.Container>
  );
};

export default Pagination;

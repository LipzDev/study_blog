/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as S from "./styles";

const Pagination = ({ setShowContent, showContent }: any) => {
  return (
    <S.Container>
      <S.Pagination>
        <div className="next">
          <span onClick={() => setShowContent(showContent + 1)}>
            Carregar mais
          </span>
        </div>
      </S.Pagination>
    </S.Container>
  );
};

export default Pagination;

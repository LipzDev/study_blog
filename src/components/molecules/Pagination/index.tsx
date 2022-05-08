/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as S from "./styles";

const Pagination = ({ setShowContent, showContent }: any) => {
  return (
    <S.Container>
      <S.Pagination>
<<<<<<< Updated upstream
        <div className="prev">
          <span onClick={() => setSelectedElement(selectedElement - 1)}>
            Anterior
          </span>
        </div>
        <S.Buttons>
          {pages.map((page, index) => (
            <button
              key={index}
              className={index === selectedElement ? "actived" : ""}
              onClick={() => setSelectedElement(index)}
            >
              {page}
            </button>
          ))}
        </S.Buttons>
        <div className="next">
          <span onClick={() => setSelectedElement(selectedElement + 1)}>
            Próxima
          </span>{" "}
=======
        <div className="next">
          <span onClick={() => setShowContent(showContent + 1)}>
            Carregar mais
          </span>
>>>>>>> Stashed changes
        </div>
      </S.Pagination>
    </S.Container>
  );
};

export default Pagination;

import React, { useState } from "react";
import * as S from "./styles";

const Pagination = () => {
  const [active, setActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState<number>(0);

  const pages = [1, 2, 3, 4, 5];

  return (
    <S.Pagination>
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
      </div>
    </S.Pagination>
  );
};

export default Pagination;

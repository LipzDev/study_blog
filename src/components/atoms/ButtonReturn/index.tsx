import React from "react";
import Link from "next/link";
import * as S from "./styles";

type ButtonReturnProps = {
  returnTo: string;
};

const ButtonReturn = ({ returnTo }: ButtonReturnProps) => {
  return (
    <S.Return>
      <Link href={returnTo}>← Voltar</Link>
    </S.Return>
  );
};

export default ButtonReturn;

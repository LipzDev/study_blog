import React from "react";
import { useRouter } from "next/router";
import * as S from "./styles";

const Logo = () => {
  const router = useRouter();

  return (
    <S.Logo onClick={() => router.push("/")}>
      <img src="../img/logo.png" alt="Logomarca" />
    </S.Logo>
  );
};

export default Logo;

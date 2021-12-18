import React from "react";
import { useRouter } from "next/router";
import * as Styles from "../Logo/styles";

const Logo = () => {
  const router = useRouter();

  return (
    <Styles.Logo onClick={() => router.push("/")}>
      <img src="../img/logo.png" alt="Logomarca" />
    </Styles.Logo>
  );
};

export default Logo;

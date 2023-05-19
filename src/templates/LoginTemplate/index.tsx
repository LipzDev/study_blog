/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from "react";
import { Router, useRouter } from "next/router";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import { useToast } from "../../hooks/toast";
import * as S from "./styles";
import { UserContext } from "../../context/user";

const LoginTemplate = () => {
  const { authLogin, setLogin, login, signed } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (signed) {
      router.push("/");
    }
  }, [signed, router]);

  return (
    !signed && (
      <>
        <S.Container>
          <ButtonReturn returnTo="/" />
          <S.FlexContent>
            <S.Form>
              <input
                type="text"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                placeholder="Login"
              />
              <input
                type="password"
                onChange={(e) => setLogin({ ...login, senha: e.target.value })}
                placeholder="Senha"
              />
              <button type="submit" onClick={(e) => authLogin(e)}>
                Logar
              </button>
            </S.Form>
          </S.FlexContent>
        </S.Container>
      </>
    )
  );
};

export default LoginTemplate;

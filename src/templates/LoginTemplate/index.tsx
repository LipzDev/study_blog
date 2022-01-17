/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";
import { auth, signIn } from "../../config/firebase";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import * as S from "./styles";
import ButtonReturn from "../../components/ButtonReturn";

const LoginTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  function Login(e: any) {
    e.preventDefault();

    signIn(auth, email, password)
      .then((userCredential: any) => {
        route.push("/admin");
        const user = userCredential.user;
        cookie.set("auth-token", user.accessToken, {
          expires: 1,
        });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  }

  return (
    <>
      <S.Container>
        <ButtonReturn returnTo="/blog" />
        <S.FlexContent>
          <S.Form>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Login"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <button type="submit" onClick={(e) => Login(e)}>
              Logar
            </button>
          </S.Form>
        </S.FlexContent>
      </S.Container>
    </>
  );
};

export default LoginTemplate;

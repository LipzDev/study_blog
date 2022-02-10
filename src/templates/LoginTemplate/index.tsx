/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { auth, signIn } from "../../config/firebase";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import ButtonReturn from "../../components/atoms/ButtonReturn";
import Head from "next/head";
import { useToast } from "../../hooks/toast";
import * as S from "./styles";

const LoginTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToast();
  const route = useRouter();

  function Login(e: any) {
    e.preventDefault();

    signIn(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        cookie.set("auth-token", user.accessToken, {
          expires: 1,
        });
        route.push("/admin");
      })
      .catch((error) => {
        addToast({
          title: "Login ou senha inválidos!",
          type: "error",
          duration: 5000,
        });
      });
  }

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(document.cookie.includes('auth-token')){
        window.location.href="/admin"
      }`,
          }}
        />
      </Head>
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

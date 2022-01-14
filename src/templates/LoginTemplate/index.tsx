/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";
import { auth, signIn } from "../../config/firebase";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import * as S from "./styles";

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
      <Link href="/">← Voltar</Link>
      <form>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={(e) => Login(e)}>
          Logar
        </button>
      </form>
    </>
  );
};

export default LoginTemplate;

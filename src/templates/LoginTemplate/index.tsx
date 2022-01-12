/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";
import firebase from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// import * as S from "./styles";
console.log(firebase);

const LoginTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Login(e: any) {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Entrou");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useState } from "react";
import { auth, signIn } from "../config/firebase";
import { useToast } from "../hooks/toast";
import { useRouter } from "next/router";
import { TokenTypes } from "../types/types";

type UserProviderProps = {
  children?: React.ReactNode;
};

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);
  const { addToast } = useToast();
  const route = useRouter();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  const loadStoreAuth = () => {
    const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
    const sessionUser = sessionStorage.getItem("@AuthFirebase:user");

    if (sessionToken && sessionUser) {
      setUser(JSON.parse(sessionUser));

      // CORRIGIR PROBLEMA DE RELOAD MUDANDO STATUS DESSE SET
      // EM ADMINTEMPLATE É PRECISO RESOLVER O PROBLEMA DE RELOAD QUE MUDA O STATUS DO SIGNED

      // E VALIDAR TOKEN SALVO NO SESSION STORAGE
    }
  };

  useEffect(() => {
    loadStoreAuth();
  }, []);

  function logout() {
    sessionStorage.removeItem("@AuthFirebase:token");
    sessionStorage.removeItem("@AuthFirebase:user");
    setUser(null);
    route.push("/");
  }

  function authLogin(e: any) {
    e.preventDefault();

    signIn(auth, login?.email, login?.senha)
      .then((userCredential: any) => {
        const user = userCredential.user;
        sessionStorage.setItem("@AuthFirebase:token", user.accessToken);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
        setUser(user);
        route.push("/");
        addToast({
          title: "Login efetuado com sucesso!",
          type: "success",
          duration: 5000,
        });
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
    <UserContext.Provider
      value={{ authLogin, signed: !!user, setLogin, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

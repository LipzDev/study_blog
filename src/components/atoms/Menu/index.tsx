import React from "react";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import * as S from "./styles";

type MenuProps = {
  isLoggedIn?: boolean;
  expanded?: boolean;
};

const Menu = ({ expanded, isLoggedIn }: MenuProps) => {
  const route = useRouter();

  function exclude() {
    cookie.remove("auth-token");
    route.push("/login");
  }

  return (
    <S.Nav className={expanded ? "active" : ""}>
      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <a onClick={() => exclude()}>Sair</a>
          ) : (
            <Link href="/login">
              {cookie.get("auth-token") ? (
                <ol>
                  <Link href="/admin">Gerenciar</Link>
                  <li>
                    <a onClick={() => exclude()}>Sair</a>
                  </li>
                </ol>
              ) : (
                "Entrar"
              )}
            </Link>
          )}
        </li>
      </ul>
    </S.Nav>
  );
};

export default Menu;

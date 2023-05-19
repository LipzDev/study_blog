import React, { useContext } from "react";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import * as S from "./styles";
import { UserContext } from "../../../context/user";

type MenuProps = {
  isLoggedIn?: boolean;
  expanded?: boolean;
};

const Menu = ({ expanded, isLoggedIn }: MenuProps) => {
  const route = useRouter();
  const { signed, logout } = useContext(UserContext);

  return (
    <S.Nav className={expanded ? "active" : ""}>
      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {!signed && (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}

        <li>
          {signed && (
            <div>
              <ol>
                <a onClick={() => route.push("/admin")}>Gerenciar</a>
                <li>
                  <a onClick={() => logout()}>Sair</a>
                </li>
              </ol>
            </div>
          )}
        </li>
      </ul>
    </S.Nav>
  );
};

export default Menu;

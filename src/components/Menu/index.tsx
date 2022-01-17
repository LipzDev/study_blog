import React from "react";
import { IconMenuProps } from "../IconMenu/index";
import Link from "next/link";
import * as S from "../Menu/styles";

const Menu = ({ expanded }: IconMenuProps) => {
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
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Menu;

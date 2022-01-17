import React from "react";
import { IconMenuProps } from "../IconMenu/index";
import Link from "next/link";
import * as Styles from "../Menu/styles";

const Menu = ({ expanded }: IconMenuProps) => {
  return (
    <Styles.Nav className={expanded ? "active" : ""}>
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
    </Styles.Nav>
  );
};

export default Menu;

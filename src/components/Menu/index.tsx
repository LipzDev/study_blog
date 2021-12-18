import React from "react";
import { useRouter } from "next/router";
import { IconMenuProps } from "../IconMenu/index";
import * as Styles from "../Menu/styles";

const Menu = ({ expanded }: IconMenuProps) => {
  const router = useRouter();

  return (
    <Styles.Nav className={expanded ? "active" : ""}>
      <ul>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a onClick={() => router.push("/login")}>Login</a>
        </li>
      </ul>
    </Styles.Nav>
  );
};

export default Menu;

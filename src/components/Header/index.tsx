import React, { useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import IconMenu from "../IconMenu";
import * as S from "./styles";

type HeaderProps = {
  isLoggedIn?: boolean;
};

const Header = ({ isLoggedIn }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header isOpen={isOpen}>
      <S.Container>
        <S.Content>
          <Logo />
          <Menu expanded={isOpen} isLoggedIn={isLoggedIn} />
          <IconMenu onClick={() => setIsOpen(!isOpen)} expanded={isOpen} />
        </S.Content>
      </S.Container>
    </S.Header>
  );
};

export default Header;

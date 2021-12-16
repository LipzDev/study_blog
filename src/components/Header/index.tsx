import React, { useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import IconMenu from "../IconMenu";
import * as S from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header>
      <S.Container>
        <S.Content>
          <Logo />
          <Menu expanded={isOpen} />
          <IconMenu onClick={() => setIsOpen(!isOpen)} expanded={isOpen} />
        </S.Content>
      </S.Container>
    </S.Header>
  );
};

export default Header;

import React from "react";
import * as S from "./styles";

export type IconMenuProps = {
  onClick?: () => void;
  expanded?: boolean;
};

const IconMenu = ({ onClick, expanded }: IconMenuProps) => {
  return (
    <>
      <S.Icon className={expanded ? "active" : ""} onClick={onClick}>
        <span className="icon-1"></span>
        <span className="icon-2"></span>
        <span className="icon-3"></span>
      </S.Icon>
    </>
  );
};

export default IconMenu;

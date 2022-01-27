import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  buttonStyle?: "transparent" | "link";
  themeColor?: "primary" | "secondary";
};

const Button = ({
  children,
  onClick,
  buttonStyle,
  themeColor,
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      buttonStyle={buttonStyle}
      themeColor={themeColor}
    >
      {children}
    </S.Button>
  );
};

export default Button;

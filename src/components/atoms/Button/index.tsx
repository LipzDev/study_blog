import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  buttonStyle?: "transparent" | "link";
  themeColor?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  children,
  onClick,
  buttonStyle,
  themeColor,
  className,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      onClick={onClick}
      buttonStyle={buttonStyle}
      themeColor={themeColor}
    >
      {children}
    </S.Button>
  );
};

export default Button;

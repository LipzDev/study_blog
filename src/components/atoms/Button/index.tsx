import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  buttonStyle?: "transparent" | "link";
  themeColor?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  disabled,
  buttonStyle,
  themeColor,
  className,
}: ButtonProps) => {
  return (
    <S.Button
      disabled={disabled}
      title={disabled ? "Desabilitado" : ""}
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

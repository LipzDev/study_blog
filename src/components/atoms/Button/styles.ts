import styled, { css } from "styled-components";
import { ButtonProps } from "./index";
import { shade } from "polished";
import theme from "../../../styles/theme";

export const wrapperModifiers = {
  primary: () => css`
    ${({ theme }) => css`
      background: ${theme.colors.primary};
      color: ${theme.colors.secondary};

      &:hover {
        background: ${shade(0.1, theme.colors.primary)};
      }
    `}
  `,
  secondary: () => css`
    ${({ theme }) => css`
      background: ${theme.colors.secondary};
      color: ${theme.colors.primary};

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.secondary};
      }
    `}
  `,

  transparent: () => css`
    ${({ theme }) => css`
      background: transparent;
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        border: 2px solid ${theme.colors.secondary};
        color: ${theme.colors.secondary};
      }
    `}
  `,

  link: () => css`
    ${({ theme }) => css`
      background: transparent;
      color: ${theme.colors.primary};
      box-shadow: none;
      padding: 0;
      margin-top: 10px;

      &:hover {
        color: ${theme.colors.terciary};
      }
    `}
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ buttonStyle, themeColor, disabled }) => css`
    padding: 10px 20px;
    border: 0;

    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 0.3rem 0.2rem 1rem rgba(29, 29, 29, 0.2);

    ${!!buttonStyle && wrapperModifiers[buttonStyle]};
    ${!!themeColor && wrapperModifiers[themeColor]};

    ${disabled &&
    css`
      opacity: 0.4;
      cursor: no-drop;

      :hover {
      }
    `}
  `}
`;

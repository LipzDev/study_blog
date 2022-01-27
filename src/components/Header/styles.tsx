import styled, { css } from "styled-components";

type HeaderProps = {
  isOpen?: boolean;
};

export const Header = styled.header<HeaderProps>`
  ${({ theme, isOpen }) => css`
    position: ${isOpen ? "fixed" : "initial"};
    background-color: ${theme.colors.black};
    padding: 10px 0;
    width: 100%;
    top: 0;
    z-index: 999;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`;

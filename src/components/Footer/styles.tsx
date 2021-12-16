import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
`
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    li {
      list-style: none;
      cursor: pointer;
    }

    li + li {
      margin-left: 20px;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      transition: 0.3s;

      font-weight: 500;
      font-size: 1.4rem;

      &:hover {
        color: ${theme.colors.terciary};
      }
    }

    @media screen and (max-width: 768px) {
      ul {
        position: fixed;
        left: -100rem;
        top: 0;
        z-index: 999;

        background-color: black;
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        transition: 0.5s;
      }

      li + li {
        margin-left: 0;
        margin-top: 30px;
      }

      a {
        color: ${theme.colors.secondary};
      }

      &.active {
        ul {
          left: 0;
        }
      }
    }
  `}
`;

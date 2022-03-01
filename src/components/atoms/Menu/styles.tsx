import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    ol {
      display: flex;
      align-items: center;

      a {
        margin-right: 20px;
      }
    }

    li {
      list-style: none;
      cursor: pointer;
      color: ${theme.colors.secondary};
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

      ol {
        flex-direction: column;
        a {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }

      li {
        text-align: center;
      }

      li + li {
        margin-top: 20px;
        margin-left: 0;
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
